// Variación B — "Showcase Premium" (inspirado en DJI)
// Secciones oscuras edge-to-edge, big bold Montserrat, hovers ricos con zoom.

const S_NAVY = "#002334";
const S_ORANGE = "#f37021";
const S_BLACK = "#0a0e14";
const S_LIGHT = "#f5f6f8";
const S_GRAY = "#a3a8b0";

const sStyles = {
  root: {
    fontFamily: "'Montserrat', sans-serif",
    background: S_BLACK,
    color: "white",
    width: 1440,
    minHeight: "100%",
    overflow: "hidden",
    fontSize: 14,
    lineHeight: 1.6,
  },
  display: { fontFamily: "'Montserrat', sans-serif", fontWeight: 800, letterSpacing: "-0.025em" },
  mono: { fontFamily: "'JetBrains Mono', ui-monospace, monospace" },
};

function SHeader() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "rgba(10,14,20,0.85)", backdropFilter: "blur(20px)",
      padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: S_ORANGE, display: "grid", placeItems: "center",
            fontWeight: 800, color: "white", fontSize: 14,
          }}>D</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.04em" }}>DIPA</span>
            <span style={{ fontSize: 9, color: S_GRAY, letterSpacing: "0.18em", textTransform: "uppercase" }}>UNEMI</span>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 28, fontSize: 13, fontWeight: 500 }}>
          {["Inicio", "Gestiones", "Modelo 2026", "Instrumentos", "Equipo", "Contacto"].map((x, i) => (
            <a key={x} href="#" style={{
              color: i === 0 ? "white" : S_GRAY, textDecoration: "none",
              borderBottom: i === 0 ? `2px solid ${S_ORANGE}` : "2px solid transparent",
              paddingBottom: 4,
            }}>{x}</a>
          ))}
        </nav>
      </div>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <button style={{ background: "transparent", border: 0, color: "white", fontFamily: "inherit", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          Buscar
        </button>
        <button style={{
          background: S_ORANGE, color: "white", border: 0, padding: "10px 20px",
          fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", cursor: "pointer",
        }}>ACCESO DOCENTE</button>
      </div>
    </header>
  );
}

function SHero() {
  return (
    <section style={{
      height: 760, position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse at 70% 30%, #0d3c5e 0%, ${S_BLACK} 70%)`,
    }}>
      {/* Imagery layer */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.45 }} aria-hidden>
        <defs>
          <radialGradient id="glow" cx="70%" cy="40%" r="50%">
            <stop offset="0%" stopColor={S_ORANGE} stopOpacity="0.45" />
            <stop offset="100%" stopColor={S_ORANGE} stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#glow)" />
      </svg>

      {/* Abstract shape */}
      <div style={{
        position: "absolute", right: -120, top: 80, width: 720, height: 540,
        background: `linear-gradient(135deg, rgba(243,112,33,0.18), transparent 60%)`,
        clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 80%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, padding: "100px 48px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <span style={{ width: 32, height: 1, background: S_ORANGE }} />
          <span style={{ ...sStyles.mono, fontSize: 11, letterSpacing: "0.22em", color: S_ORANGE, fontWeight: 600 }}>
            ECOSISTEMA DE FORMACIÓN · UNEMI 2026
          </span>
        </div>

        <h1 style={{
          ...sStyles.display, fontSize: 110, lineHeight: 0.95, margin: 0, maxWidth: 1100,
          letterSpacing: "-0.035em",
        }}>
          Innovación que<br />
          <span style={{ color: S_ORANGE }}>transforma</span> la<br />
          academia.
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: 600, marginTop: 36, lineHeight: 1.6 }}>
          Gestionamos los procesos académicos de UNEMI y acompañamos al profesorado
          con tecnología, pedagogía y visión de futuro. Una nueva generación de
          formación superior empieza aquí.
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
          <button style={{
            background: S_ORANGE, color: "white", border: 0, padding: "16px 28px",
            fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 10,
          }}>EXPLORAR MODELO 2026 <span style={{ fontSize: 16 }}>→</span></button>
          <button style={{
            background: "rgba(255,255,255,0.06)", color: "white", border: "1px solid rgba(255,255,255,0.18)",
            padding: "16px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
            cursor: "pointer", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", border: "1.5px solid white", display: "grid", placeItems: "center", fontSize: 9 }}>▶</span>
            VER VIDEO INSTITUCIONAL
          </button>
        </div>

        {/* Stats bar - DJI-style bottom */}
        <div style={{
          position: "absolute", left: 48, right: 48, bottom: 40,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32,
          padding: "28px 36px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}>
          {DIPA_DATA.stats.map((s) => (
            <div key={s.label} style={{ borderLeft: `2px solid ${S_ORANGE}`, paddingLeft: 18 }}>
              <div style={{ ...sStyles.display, fontSize: 36, lineHeight: 1, color: "white" }}>{s.num}</div>
              <div style={{ fontSize: 12, color: S_GRAY, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SIntro() {
  return (
    <section style={{ padding: "120px 48px", background: S_LIGHT, color: S_BLACK }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.22em", marginBottom: 20, fontWeight: 600 }}>SOBRE LA DIPA</div>
          <h2 style={{ ...sStyles.display, fontSize: 64, margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Una dirección<br />que <span style={{ color: S_ORANGE }}>diseña<br />el futuro</span> del<br />aprendizaje.
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#333", margin: 0 }}>
            La Dirección de Innovación de Procesos Académicos gestiona los procesos académicos
            y brinda soporte al profesorado en los diferentes ambientes de aprendizaje, desde una
            perspectiva pedagógica e innovadora.
          </p>
          <p style={{ fontSize: 15, color: "#555", marginTop: 18, lineHeight: 1.75 }}>
            Incorporamos el uso de tecnologías que fortalecen la enseñanza y contribuyen
            al mejoramiento continuo de la calidad educativa en UNEMI.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 40, paddingTop: 32, borderTop: "1px solid #d8dade" }}>
            <div>
              <div style={{ ...sStyles.display, fontSize: 28, color: S_NAVY }}>2026</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Modelo vigente</div>
            </div>
            <div>
              <div style={{ ...sStyles.display, fontSize: 28, color: S_NAVY }}>9</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Facultades</div>
            </div>
            <div>
              <div style={{ ...sStyles.display, fontSize: 28, color: S_NAVY }}>120+</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Instrumentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SGestiones() {
  return (
    <section style={{ background: S_BLACK, padding: "120px 0 120px" }}>
      <div style={{ padding: "0 48px", marginBottom: 56 }}>
        <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>NUESTRAS GESTIONES</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40 }}>
          <h2 style={{ ...sStyles.display, fontSize: 72, margin: 0, lineHeight: 1, letterSpacing: "-0.03em", maxWidth: 700 }}>
            Dos áreas que<br />impulsan la <span style={{ color: S_ORANGE }}>excelencia</span>.
          </h2>
          <p style={{ fontSize: 15, color: S_GRAY, maxWidth: 360, margin: 0, lineHeight: 1.7 }}>
            Trabajamos desde dos frentes complementarios para garantizar la calidad y
            la transformación continua de los procesos académicos institucionales.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(255,255,255,0.08)" }}>
        {DIPA_DATA.gestiones.map((g, i) => (
          <article key={g.code} className="s-gestion" style={{
            background: S_BLACK, padding: "60px 56px", position: "relative", overflow: "hidden",
            minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "space-between",
            cursor: "pointer", transition: "background 0.4s",
          }}>
            <div style={{
              position: "absolute", inset: 0, background: i === 0
                ? `linear-gradient(135deg, rgba(0,35,52,0.4), transparent), radial-gradient(circle at 70% 30%, rgba(243,112,33,0.18), transparent 60%)`
                : `linear-gradient(135deg, rgba(0,35,52,0.6), transparent), radial-gradient(circle at 30% 70%, rgba(243,112,33,0.12), transparent 60%)`,
              opacity: 0.9, pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 16, marginBottom: 32,
              }}>
                <div style={{
                  ...sStyles.display, fontSize: 96, lineHeight: 0.8, color: "rgba(255,255,255,0.12)",
                }}>{g.code}</div>
                <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.18em" }}>
                  ÁREA {g.code} / 02
                </div>
              </div>

              <h3 style={{ ...sStyles.display, fontSize: 42, lineHeight: 1.05, margin: "0 0 24px", maxWidth: 440 }}>{g.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", maxWidth: 520, margin: 0, lineHeight: 1.75 }}>{g.desc}</p>
            </div>

            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 48 }}>
              <div style={{
                width: 80, height: 80, border: `1px solid rgba(255,255,255,0.2)`, borderRadius: "50%",
                display: "grid", placeItems: "center", transition: "all 0.3s",
              }} className="s-arrow">
                <span style={{ fontSize: 22, color: "white" }}>→</span>
              </div>
              <div style={{ ...sStyles.mono, fontSize: 11, color: S_GRAY, letterSpacing: "0.1em" }}>
                {g.short.toUpperCase()}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SEjes() {
  return (
    <section style={{ background: S_BLACK, padding: "120px 48px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ textAlign: "center", marginBottom: 80 }}>
        <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.22em", marginBottom: 18, fontWeight: 600 }}>MODELO EDUCATIVO 2026</div>
        <h2 style={{ ...sStyles.display, fontSize: 76, margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>
          Tres ejes. <span style={{ color: S_ORANGE }}>Una transformación</span>.
        </h2>
        <p style={{ fontSize: 16, color: S_GRAY, maxWidth: 620, margin: "24px auto 0", lineHeight: 1.7 }}>
          Las dimensiones estratégicas que estructuran el Ecosistema de Formación 2026.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {DIPA_DATA.ejes.map((e, i) => (
          <article key={e.sigla} className="s-eje" style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: 0, position: "relative", overflow: "hidden",
            minHeight: 460, display: "flex", flexDirection: "column",
            cursor: "pointer", transition: "all 0.4s",
          }}>
            <div className="s-eje-img" style={{
              height: 220, background: `linear-gradient(135deg, ${S_NAVY} 0%, #0a3f6b 100%)`,
              position: "relative", overflow: "hidden", display: "grid", placeItems: "center",
            }}>
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }} aria-hidden>
                <defs>
                  <pattern id={`dots-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#dots-${i})`} />
              </svg>
              <div style={{
                ...sStyles.display, fontSize: 144, lineHeight: 0.8, color: "white",
                position: "relative", letterSpacing: "-0.04em",
              }}>
                <span style={{ color: S_ORANGE }}>{e.letra}</span>{e.sigla.slice(1)}
              </div>
              <div style={{
                position: "absolute", top: 18, right: 22,
                ...sStyles.mono, fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em",
              }}>0{i + 1}/03</div>
            </div>

            <div style={{ padding: "32px 32px 36px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ ...sStyles.display, fontSize: 26, margin: "0 0 14px", lineHeight: 1.1, fontWeight: 700 }}>{e.titulo}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, flex: 1, margin: 0 }}>{e.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
                {e.tags.map((t) => (
                  <span key={t} style={{
                    ...sStyles.mono, fontSize: 10, color: S_ORANGE, padding: "4px 10px",
                    border: "1px solid rgba(243,112,33,0.4)", letterSpacing: "0.05em",
                  }}>{t}</span>
                ))}
              </div>
              <div style={{
                marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "white", letterSpacing: "0.06em" }}>MÁS INFORMACIÓN</span>
                <span style={{ color: S_ORANGE, fontSize: 18 }}>→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SModeloDownload() {
  return (
    <section style={{
      padding: "100px 48px", position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, ${S_NAVY} 0%, #003757 60%, ${S_BLACK} 100%)`,
    }}>
      <div style={{
        position: "absolute", right: -200, top: -100, width: 600, height: 600,
        background: `radial-gradient(circle, rgba(243,112,33,0.25), transparent 60%)`,
        borderRadius: "50%",
      }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 60 }}>
        <div>
          <div style={{
            ...sStyles.display, fontSize: 160, lineHeight: 0.8, color: S_ORANGE, letterSpacing: "-0.04em",
          }}>MEU</div>
        </div>
        <div>
          <div style={{ ...sStyles.mono, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.22em", marginBottom: 14 }}>DOCUMENTO MAESTRO · 2026</div>
          <h3 style={{ ...sStyles.display, fontSize: 44, margin: "0 0 16px", lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Modelo Educativo UNEMI 2026
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 580, margin: 0, lineHeight: 1.7 }}>
            Ecosistema Global de Formación por Competencias. Marco conceptual institucional,
            diseño curricular, evaluación auténtica y mejora continua basada en analítica de datos.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch" }}>
          <button style={{
            background: S_ORANGE, color: "white", border: 0, padding: "18px 32px",
            fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
          }}><span style={{ fontSize: 17 }}>↓</span> DESCARGAR PDF</button>
          <button style={{
            background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)",
            padding: "16px 32px", fontFamily: "inherit", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer",
          }}>VER ONLINE</button>
        </div>
      </div>
    </section>
  );
}

function SRepositorio() {
  const [q, setQ] = React.useState("");
  const [tipo, setTipo] = React.useState("Todos");
  const tipos = ["Todos", "Formatos", "Guías", "Lineamientos", "Manuales", "Protocolos"];

  const docs = DIPA_DATA.documentos.filter(d =>
    (tipo === "Todos" || d.tipo === tipo) &&
    (q === "" || d.title.toLowerCase().includes(q.toLowerCase()) || d.code.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section style={{ padding: "120px 48px", background: S_LIGHT, color: S_BLACK }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, marginBottom: 48 }}>
        <div>
          <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>REPOSITORIO DE INSTRUMENTOS</div>
          <h2 style={{ ...sStyles.display, fontSize: 72, margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Todo lo que<br />necesitas para<br /><span style={{ color: S_ORANGE }}>enseñar mejor</span>.
          </h2>
        </div>
        <div style={{ alignSelf: "end" }}>
          <p style={{ fontSize: 16, color: "#444", margin: 0, lineHeight: 1.75 }}>
            Documentos primarios y secundarios para la implementación del currículo. Formatos,
            guías metodológicas, lineamientos, manuales y protocolos en un solo lugar.
          </p>
        </div>
      </div>

      {/* Big search + filter bar */}
      <div style={{ background: "white", padding: "8px", borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: 32 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto", gap: 0, alignItems: "center",
          background: "#f7f8fa", padding: "18px 22px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={S_NAVY} strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar instrumento por nombre o código (ej. FR0018, syllabus, IA…)"
              style={{
                border: 0, outline: "none", flex: 1, fontSize: 16, fontFamily: "inherit",
                background: "transparent", color: S_BLACK, width: "100%",
              }}
            />
          </div>
          <button style={{
            background: S_NAVY, color: "white", border: 0, padding: "12px 24px",
            fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer",
          }}>BUSCAR</button>
        </div>
        <div style={{ display: "flex", gap: 8, padding: "16px 22px", flexWrap: "wrap" }}>
          {tipos.map((t) => {
            const count = t === "Todos" ? DIPA_DATA.documentos.length : DIPA_DATA.documentos.filter(d => d.tipo === t).length;
            return (
              <button key={t} onClick={() => setTipo(t)} style={{
                background: tipo === t ? S_ORANGE : "transparent",
                color: tipo === t ? "white" : "#555",
                border: `1px solid ${tipo === t ? S_ORANGE : "#dadce0"}`, padding: "8px 16px",
                fontSize: 12, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
                letterSpacing: "0.04em", borderRadius: 999,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                {t} <span style={{ opacity: 0.6, fontSize: 10 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {docs.slice(0, 12).map((d) => (
          <article key={d.code} className="s-doc" style={{
            background: "white", padding: 0, position: "relative", overflow: "hidden",
            cursor: "pointer", transition: "all 0.3s", minHeight: 240,
            display: "flex", flexDirection: "column",
          }}>
            <div style={{
              height: 110, background: `linear-gradient(135deg, ${S_NAVY} 0%, #003e63 100%)`,
              position: "relative", overflow: "hidden", display: "grid", placeItems: "center",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(circle at 70% 30%, rgba(243,112,33,0.25), transparent 60%)`,
              }} />
              <span style={{ ...sStyles.mono, fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", position: "absolute", top: 12, left: 14 }}>{d.tipo.toUpperCase()}</span>
              <div style={{ position: "relative", color: "white", ...sStyles.display, fontSize: 28, letterSpacing: "-0.02em" }}>{d.code}</div>
            </div>
            <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, margin: "0 0 12px", flex: 1, color: S_BLACK }}>{d.title}</h4>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "#888" }}>
                <span>{d.nivel} · {d.fecha}</span>
                <span style={{ color: S_ORANGE, fontWeight: 700, fontSize: 12 }}>↓ PDF</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 40, textAlign: "center" }}>
        <button style={{
          background: S_BLACK, color: "white", border: 0, padding: "16px 36px",
          fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer",
        }}>VER LOS {DIPA_DATA.documentos.length} INSTRUMENTOS →</button>
      </div>
    </section>
  );
}

function SEquipo() {
  return (
    <section style={{ background: S_BLACK, padding: "120px 48px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 40 }}>
        <div>
          <div style={{ ...sStyles.mono, fontSize: 11, color: S_ORANGE, letterSpacing: "0.22em", marginBottom: 16, fontWeight: 600 }}>NUESTRO EQUIPO</div>
          <h2 style={{ ...sStyles.display, fontSize: 72, margin: 0, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Las personas detrás<br />de la <span style={{ color: S_ORANGE }}>innovación</span>.
          </h2>
        </div>
        <button style={{
          background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)",
          padding: "14px 24px", fontFamily: "inherit", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer",
        }}>VER TODO EL EQUIPO →</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {DIPA_DATA.equipo.map((p, i) => (
          <article key={p.nombre} className="s-team" style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            padding: 0, overflow: "hidden", transition: "all 0.3s", cursor: "pointer",
          }}>
            <div style={{
              aspectRatio: "4/5", background: `linear-gradient(180deg, ${S_NAVY}, #001823)`,
              display: "grid", placeItems: "center", position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 30%, rgba(243,112,33,0.15), transparent 60%)` }} />
              <div style={{ ...sStyles.display, fontSize: 64, color: "rgba(255,255,255,0.4)", position: "relative" }}>
                {p.nombre.split(" ").map(w => w[0]).slice(0, 2).join("")}
              </div>
              {i === 0 && (
                <div style={{ position: "absolute", top: 12, left: 12, background: S_ORANGE, color: "white", padding: "3px 8px", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em" }}>DIRECTOR</div>
              )}
            </div>
            <div style={{ padding: "18px 18px 22px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{p.nombre}</div>
              <div style={{ fontSize: 12, color: S_GRAY, lineHeight: 1.5 }}>{p.cargo}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SFooter() {
  return (
    <footer style={{ background: "#05080c", padding: "80px 48px 32px", color: "white", borderTop: `4px solid ${S_ORANGE}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 64 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
            <div style={{ width: 38, height: 38, background: S_ORANGE, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 18 }}>D</div>
            <div style={{ ...sStyles.display, fontSize: 22 }}>DIPA</div>
          </div>
          <div style={{ fontSize: 13, color: S_GRAY, lineHeight: 1.7, marginBottom: 24, maxWidth: 320 }}>
            Dirección de Innovación de Procesos Académicos.<br />
            Universidad Estatal de Milagro, Ecuador.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["FB", "IG", "YT", "X"].map((s) => (
              <div key={s} style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600 }}>{s}</div>
            ))}
          </div>
        </div>
        {[
          { t: "GESTIONES", l: ["Proyectos Académicos", "Técnica Pedagógica", "Coordinación"] },
          { t: "RECURSOS", l: ["Repositorio", "Modelo 2026", "Formatos", "Protocolos"] },
          { t: "INSTITUCIÓN", l: ["UNEMI", "Vicerrectorado", "Intranet"] },
          { t: "CONTACTO", l: ["direccion-innovacion@unemi.edu.ec", "+593 4 2715081"] },
        ].map((col) => (
          <div key={col.t}>
            <div style={{ ...sStyles.mono, fontSize: 10.5, color: S_ORANGE, letterSpacing: "0.18em", marginBottom: 18 }}>{col.t}</div>
            {col.l.map((x) => (
              <a key={x} href="#" style={{ display: "block", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13, marginBottom: 10 }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "rgba(255,255,255,0.5)" }}>
        <div>© 2026 Universidad Estatal de Milagro. Todos los derechos reservados.</div>
        <div style={{ ...sStyles.mono, letterSpacing: "0.12em" }}>DIPA · UNEMI · 2026</div>
      </div>
    </footer>
  );
}

function VariationShowcase() {
  return (
    <div style={sStyles.root}>
      <style>{`
        .s-gestion:hover { background: #0f1620 !important; }
        .s-gestion:hover .s-arrow { background: ${S_ORANGE}; border-color: ${S_ORANGE}; transform: rotate(-12deg); }
        .s-eje:hover { transform: translateY(-6px); border-color: rgba(243,112,33,0.4) !important; }
        .s-eje:hover .s-eje-img { background: linear-gradient(135deg, ${S_NAVY} 0%, #003757 100%) !important; }
        .s-doc:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }
        .s-team:hover { background: rgba(243,112,33,0.06) !important; border-color: rgba(243,112,33,0.3) !important; }
      `}</style>
      <SHeader />
      <SHero />
      <SIntro />
      <SGestiones />
      <SEjes />
      <SModeloDownload />
      <SRepositorio />
      <SEquipo />
      <SFooter />
    </div>
  );
}

window.VariationShowcase = VariationShowcase;
