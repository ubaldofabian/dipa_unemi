    // ===== 3D CAROUSEL CONTROLLER =====
    (function () {
      var cards = document.querySelectorAll('.dim-card');
      var dots = document.querySelectorAll('.dim-dot');
      var arrowLeft = document.querySelector('.dim-arrow-left');
      var arrowRight = document.querySelector('.dim-arrow-right');
      var total = cards.length;
      var current = 0;
      var autoTimer = null;
      var dragMoved = false;

      // Si aún no existe el carrusel en la página, salir sin romper el resto del JS
      if (!total || !arrowLeft || !arrowRight) return;

      function getPos(offset) {
        if (offset === 0) return 'center';
        if (offset === 1) return 'right1';
        if (offset === -1) return 'left1';
        if (offset === 2) return 'right2';
        if (offset === -2) return 'left2';
        return 'hidden';
      }

      function updateCarousel() {
        cards.forEach(function (card) {
          var idx = parseInt(card.getAttribute('data-index'));
          var diff = idx - current;
          // Wrap around
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          card.setAttribute('data-pos', getPos(diff));
          // Remove flip from non-center cards
          if (diff !== 0) card.classList.remove('flipped');
        });
        dots.forEach(function (dot) {
          dot.classList.toggle('active', parseInt(dot.getAttribute('data-slide')) === current);
        });
      }

      function goTo(idx) {
        current = ((idx % total) + total) % total;
        updateCarousel();
        resetAuto();
      }

      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(function () {
          // Only auto-advance if no card is flipped
          var anyFlipped = document.querySelector('.dim-card.flipped');
          if (!anyFlipped) next();
        }, 5000);
      }

      arrowRight.addEventListener('click', next);
      arrowLeft.addEventListener('click', prev);

      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          goTo(parseInt(dot.getAttribute('data-slide')));
        });
      });

      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          if (dragMoved) { dragMoved = false; return; }
          var idx = parseInt(card.getAttribute('data-index'));
          if (idx === current) {
            card.classList.toggle('flipped');
            resetAuto();
          } else {
            goTo(idx);
          }
        });
      });

      // Keyboard nav
      document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });

      // ===== Arrastre "en vivo" con ROTACIÓN siguiendo al cursor/dedo (mouse + táctil) =====
      var dragging = false;
      var dragStartX = 0;
      var touchStartY = 0;
      var dragAxis = null;     // 'h' (horizontal) | 'v' (vertical) — se decide al iniciar el gesto táctil
      var activeStep = 340;    // px para avanzar una posición (según pantalla)
      var activeSlots = null;
      var viewport = document.querySelector('.dim-carousel-viewport');

      // Posiciones por slot según ancho de pantalla (coinciden con el CSS): [x, z, rotateY, opacity, brillo]
      function computeSlots() {
        var w = window.innerWidth;
        if (w <= 640) {
          activeStep = 180;
          activeSlots = { '-2': [-360, -160, 16, 0, 0.45], '-1': [-180, -80, 8, 0.6, 0.7], '0': [0, 0, 0, 1, 1], '1': [180, -80, -8, 0.6, 0.7], '2': [360, -160, -16, 0, 0.45] };
        } else if (w <= 900) {
          activeStep = 240;
          activeSlots = { '-2': [-480, -200, 16, 0, 0.45], '-1': [-240, -100, 10, 0.85, 0.7], '0': [0, 0, 0, 1, 1], '1': [240, -100, -10, 0.85, 0.7], '2': [480, -200, -16, 0, 0.45] };
        } else {
          activeStep = 340;
          activeSlots = { '-2': [-580, -260, 20, 0.5, 0.45], '-1': [-340, -120, 12, 0.85, 0.7], '0': [0, 0, 0, 1, 1], '1': [340, -120, -12, 0.85, 0.7], '2': [580, -260, -20, 0.5, 0.45] };
        }
      }
      computeSlots();

      function lerp(a, b, t) { return a + (b - a) * t; }
      function slotVals(r) {
        var S = activeSlots;
        if (r <= -2) return S['-2'];
        if (r >= 2) return S['2'];
        var lo = Math.floor(r), t = r - lo, A = S[lo], B = S[lo + 1];
        return [lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t), lerp(A[3], B[3], t), lerp(A[4], B[4], t)];
      }
      // Coloca cada tarjeta en una posición fraccionaria (interpola entre slots)
      function applyDrag(frac) {
        cards.forEach(function (card) {
          var idx = parseInt(card.getAttribute('data-index'));
          var r = idx - frac;
          if (r > total / 2) r -= total;
          if (r < -total / 2) r += total;
          if (r < -2.3 || r > 2.3) {
            card.style.opacity = '0';
            card.style.transform = 'translateX(0) translateZ(-500px)';
            card.style.zIndex = '1';
            return;
          }
          var v = slotVals(r);
          card.style.transform = 'translateX(' + v[0] + 'px) translateZ(' + v[1] + 'px) rotateY(' + v[2] + 'deg)';
          card.style.opacity = v[3];
          card.style.filter = 'brightness(' + v[4] + ')';
          card.style.zIndex = String(Math.round(10 - Math.abs(r)));
        });
      }
      function setCardTransition(on) {
        cards.forEach(function (card) { card.style.transition = on ? '' : 'none'; });
      }
      function clearCardInline() {
        cards.forEach(function (card) {
          card.style.transform = ''; card.style.opacity = '';
          card.style.filter = ''; card.style.zIndex = '';
        });
      }
      function startDrag(x) {
        computeSlots();           // adaptar a la pantalla actual
        dragging = true; dragMoved = false; dragAxis = null; dragStartX = x;
        clearInterval(autoTimer);
        setCardTransition(false); // seguir al dedo/cursor sin retraso
      }
      function moveDrag(x) {
        if (!dragging) return;
        var dx = x - dragStartX;
        if (Math.abs(dx) > 6) dragMoved = true;
        applyDrag(current - dx / activeStep); // arrastrar a la derecha → entra la anterior
      }
      function endDrag(x) {
        if (!dragging) return;
        dragging = false;
        var dx = x - dragStartX;
        var target = Math.round(current - dx / activeStep);
        setCardTransition(true);  // snap suave (transición del CSS)
        clearCardInline();        // devolver el control al CSS (data-pos)
        current = ((target % total) + total) % total;
        updateCarousel();
        resetAuto();
      }
      function cancelDrag() {
        if (!dragging) return;
        dragging = false;
        setCardTransition(true);
        clearCardInline();
        updateCarousel();
        resetAuto();
      }

      if (viewport) {
        // Mouse (escritorio)
        viewport.addEventListener('mousedown', function (e) { startDrag(e.clientX); e.preventDefault(); });
        window.addEventListener('mousemove', function (e) { moveDrag(e.clientX); });
        window.addEventListener('mouseup', function (e) { endDrag(e.clientX); });

        // Táctil (móvil): mismo arrastre en vivo, con detección de dirección
        viewport.addEventListener('touchstart', function (e) {
          var t = e.changedTouches[0];
          touchStartY = t.clientY;
          startDrag(t.clientX);
        }, { passive: true });
        viewport.addEventListener('touchmove', function (e) {
          if (!dragging) return;
          var t = e.changedTouches[0];
          var dx = t.clientX - dragStartX;
          var dy = t.clientY - touchStartY;
          if (dragAxis === null) {
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return; // aún sin decidir
            dragAxis = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
          }
          if (dragAxis === 'v') { cancelDrag(); return; }        // gesto vertical → scroll normal
          e.preventDefault();                                    // gesto horizontal → rotar (sin scroll)
          moveDrag(t.clientX);
        }, { passive: false });
        viewport.addEventListener('touchend', function (e) { endDrag(e.changedTouches[0].clientX); }, { passive: true });
        viewport.addEventListener('touchcancel', cancelDrag, { passive: true });
      }

      // Init
      updateCarousel();
      resetAuto();
    })();

    // Roles tabs
    document.querySelectorAll('.meu-proceso-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.meu-proceso-tab').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var role = btn.getAttribute('data-proceso');
        document.querySelectorAll('.meu-proceso-panel').forEach(function (p) { p.classList.remove('active'); });
        var target = document.querySelector('.meu-proceso-panel[data-panel="' + role + '"]');
        if (target) target.classList.add('active');
      });
    });

    // Counter animation
    function animateCounters() {
      document.querySelectorAll('.meu-stat-num[data-target]').forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'));
        var duration = target > 100 ? 1800 : 900;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
          el.textContent = Math.floor(e * target);
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
      });
    }
    var statsBar = document.querySelector('.meu-stats-grid');
    if (statsBar && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (e) {
        if (e[0].isIntersecting) { animateCounters(); obs.disconnect(); }
      }, { threshold: 0.3 });
      obs.observe(statsBar);
    } else {
      animateCounters();
    }

    // Active nav on scroll
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.meu-nav a');
    window.addEventListener('scroll', function () {
      var current = '';
      sections.forEach(function (s) {
        var top = s.offsetTop - 150;
        if (scrollY >= top) current = s.id;
      });
      navLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    });

    // Video modal
    function openVideo(url) {
      var HERO = 'https://www.unemi.edu.ec/wp-content/uploads/2026/06/Modelo-Educativo-UNEMI-2026-SL.mp4';
      url = url || HERO;
      var modal = document.getElementById('videoModal');
      if (!modal) return;
      var video = document.getElementById('modalVideoPlayer');
      if (video && video.getAttribute('data-current') !== url) {
        video.src = url;
        video.setAttribute('data-current', url);
        video.load();
      }
      modal.classList.add('active');
      if (video) { video.muted = false; video.currentTime = 0; video.play(); }
    }
    function closeVideo() {
      var modal = document.getElementById('videoModal');
      if (!modal) return;
      modal.classList.remove('active');
      var video = document.getElementById('modalVideoPlayer');
      if (video) video.pause();
    }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeVideo(); });

    // ===== Menú hamburguesa (móvil) =====
    (function () {
      var burger = document.getElementById('meuBurger');
      var menu = document.getElementById('meuMobileMenu');
      if (!burger || !menu) return;

      function openMenu() {
        document.body.classList.add('meu-menu-open');
        burger.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
      }
      function closeMenu() {
        document.body.classList.remove('meu-menu-open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      }
      function toggleMenu() {
        if (document.body.classList.contains('meu-menu-open')) closeMenu();
        else openMenu();
      }

      burger.addEventListener('click', toggleMenu);
      // Cerrar al pulsar un enlace del menú
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
      });
      // Cerrar con Escape
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
      // Cerrar si la pantalla crece más de 1200px (evita ver ambos menús)
      window.addEventListener('resize', function () {
        if (window.innerWidth > 1200) closeMenu();
      });
    })();

    // ===== Flip cards de Competencias: voltear al tocar (solo en pantallas táctiles) =====
    (function () {
      var noHover = window.matchMedia && window.matchMedia('(hover: none)').matches;
      if (!noHover) return; // en escritorio ya giran con el hover
      var flips = document.querySelectorAll('.meu-flip');
      flips.forEach(function (card) {
        card.addEventListener('click', function () {
          card.classList.toggle('flipped'); // tocar de nuevo la tarjeta la regresa
        });
      });
      // Tocar fuera de las tarjetas: regresar todas a su posición original
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.meu-flip')) {
          flips.forEach(function (c) { c.classList.remove('flipped'); });
        }
      });
    })();

    // ===== Descarga / Ver online del PDF del Modelo Educativo =====
    (function () {
      var PDF = 'https://www.unemi.edu.ec/wp-content/uploads/2026/07/MODELO-EDUCATIVO-2026-COMPLETO-JULIO.pdf';
      var ONLINE = 'https://heyzine.com/flip-book/857143c17d.html';
      var d = document.getElementById('meuDescargaPDF');
      var v = document.getElementById('meuVerOnline');
      if (d) d.addEventListener('click', function () {
        var a = document.createElement('a');
        a.href = PDF;
        a.download = 'MODELO-EDUCATIVO-2026-COMPLETO-JULIO.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
      if (v) v.addEventListener('click', function () { window.open(ONLINE, '_blank'); });
    })();

    // ===== Lightbox: abrir imágenes (galería / intro) en grande =====
    function closeImgModal() {
      var m = document.getElementById('imgModal');
      if (m) { m.classList.remove('active'); }
    }
    (function () {
      var modal = document.getElementById('imgModal');
      var pic = document.getElementById('imgModalPic');
      if (!modal || !pic) return;
      document.querySelectorAll('.meu-galeria-item, .meu-intro-image').forEach(function (item) {
        item.addEventListener('click', function () {
          var img = item.querySelector('img');
          if (img && img.getAttribute('src')) {
            pic.src = img.getAttribute('src');
            modal.classList.add('active');
          }
        });
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeImgModal(); });
    })();

    // ===== Línea deslizante del menú (estilo institucional) =====
    (function () {
      var nav = document.querySelector('.meu-nav.header-nav');
      if (!nav) return;
      var line = nav.querySelector('.meu-nav-line');
      var links = nav.querySelectorAll('a');
      if (!line || !links.length) return;
      var hovering = false;

      function moveLineTo(el) {
        if (!el) return;
        line.style.left = el.offsetLeft + 'px';
        line.style.width = el.offsetWidth + 'px';
      }
      function moveToActive() {
        moveLineTo(nav.querySelector('a.active') || links[0]);
      }

      links.forEach(function (a) {
        a.addEventListener('mouseenter', function () { hovering = true; moveLineTo(a); });
      });
      nav.addEventListener('mouseleave', function () { hovering = false; moveToActive(); });
      window.addEventListener('resize', function () { if (!hovering) moveToActive(); });
      window.addEventListener('scroll', function () { if (!hovering) moveToActive(); });
      window.addEventListener('load', moveToActive);
      moveToActive();
    })();
