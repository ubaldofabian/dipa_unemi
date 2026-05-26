================================================================================
INSTRUCCIONES DE USO - PÁGINA CON VIDEO DE FONDO (UNEMI)
================================================================================

📁 ARCHIVOS NECESARIOS:
- index.html (la página principal)
- tu-video.mp4 (tu video descargado)

⚙️ CONFIGURACIÓN:

1. DESCARGAR EL ARCHIVO INDEX.HTML
   - Guarda el archivo "index.html" en tu computadora
   - Preferiblemente crea una carpeta llamada "unemi-innovacion" o similar

2. PREPARAR TU VIDEO
   - Coloca tu archivo de video descargado EN LA MISMA CARPETA que el index.html
   - Nombre recomendado: "tu-video.mp4" (puede ser cualquier nombre, pero asegúrate de actualizar la ruta en el HTML)
   - Formatos soportados: MP4, WebM, Ogg
   - Tamaño recomendado: Máximo 100MB (para carga rápida)

3. ACTUALIZAR LAS RUTAS DEL VIDEO EN EL HTML
   Si tu video tiene un nombre diferente, edita el HTML:
   
   - Abre el index.html con un editor de texto (Notepad++, VS Code, etc.)
   - Busca la línea: <source src="tu-video.mp4" type="video/mp4">
   - Cambia "tu-video.mp4" por el nombre real de tu archivo
   - Guarda los cambios
   
   (Aparece 2 veces en el archivo: una en la sección HERO y otra en el MODAL)

4. ABRIR EN EL NAVEGADOR
   - Abre el archivo index.html con tu navegador favorito
   - O arrastra el archivo hacia el navegador
   - O haz clic derecho > Abrir con > Navegador

✨ CARACTERÍSTICAS IMPLEMENTADAS:

✓ Video de fondo que se reproduce automáticamente sin sonido
✓ Botón de play circular en el centro
✓ Al hacer clic en el botón → video se maximiza con sonido
✓ Controles de video (play/pausa, volumen, pantalla completa) en el modal
✓ Cierra el modal al:
  - Hacer clic en la X
  - Hacer clic fuera del video
  - Presionar la tecla ESC
✓ Diseño responsive (funciona en móvil y desktop)
✓ Colores UNEMI (#003d99 - azul oficial)
✓ Todas las secciones de la página original incluidas

🎨 PERSONALIZACIÓN:

Si quieres cambiar cosas:

- ALTURA DEL VIDEO: Busca ".video-hero { height: 600px; }" y cambia el valor
- COLOR DE FONDO: Busca "#003d99" y reemplázalo por el color que quieras
- TEXTO: Edita los títulos y párrafos directamente en el HTML
- OVERLAY (oscuridad): Busca "rgba(0, 0, 0, 0.4)" y ajusta el número (0-1)

📱 PARA MOSTRAR A TU JEFE:

1. Abre el archivo en tu navegador
2. Dirígelo a la página - verá el video de fondo con audio desactivado
3. Al hacer clic en el botón de play → video se maximiza con audio
4. Muestra cómo se cierra (X, ESC, o clic afuera)
5. Puedes mostrar que es responsive (redimensiona la ventana)

🚀 PRÓXIMOS PASOS PARA IMPLEMENTAR EN WORDPRESS:

Una vez que le guste a tu jefe, para implementarlo en la web real:

1. Sube el video a la librería de medios de WordPress
2. En WPBakery, añade un elemento "HTML" personalizado
3. Copia el código HTML del archivo index.html
4. Actualiza las rutas del video (WordPress genera URLs propias)
5. Publica los cambios

📞 NOTAS TÉCNICAS:

- El archivo está completamente standalone (no requiere conexión a internet)
- Excepto por las imágenes del equipo que se cargan de www.unemi.edu.ec
- Si trabajas offline, descarga también esas imágenes
- Soporta navegadores modernos (Chrome, Firefox, Safari, Edge)

💡 SI HAY PROBLEMAS:

1. El video no aparece:
   - Verifica que el archivo .mp4 esté en la MISMA carpeta que index.html
   - Verifica que el nombre del archivo en la etapa <source> sea exacto (mayúsculas/minúsculas)

2. El video está muy comprimido:
   - Aumenta la altura: cambia "height: 600px;" en .video-hero

3. Quiero cambiar la resolución del video:
   - El video se ajusta automáticamente con "object-fit: cover"
   - Si se ve cortado, cambia a "object-fit: contain"

================================================================================
¡LISTO PARA MOSTRAR A TU JEFE! 🎬
================================================================================
