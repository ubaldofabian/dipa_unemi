// Variación C — "Arquitectónica"
// Grid suizo, bloques de color, numerales manifesto. Source Serif 4 + Montserrat.

const A_NAVY = "#002334";
const A_ORANGE = "#f37021";
const A_INK = "#0a0a0a";
const A_PAPER = "#ffffff";
const A_CREAM = "#f1ede4";
const A_SAND = "#e8e3d6";
const A_LINE = "#1a1a1a";
const A_MUTED = "#555";

const aStyles = {
  root: {
    fontFamily: "'Montserrat', sans-serif",
    background: A_PAPER,
    color: A_INK,
    width: 1440,
    minHeight: "100%",
    overflow: "hidden",
    fontSize: 14,
    lineHeight: 1.6,
  },
  serif: { fontFamily: "'Source Serif 4', 'Source Serif Pro', Georgia, serif", fontWeight: 400 },
  mono: { fontFamily: "'JetBrains Mono', ui-monospace, monospace" },
};

function AHeader() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 5, background: A_PAPER,
      borderBottom: `2px solid ${A_INK}`,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr auto", padding: "18px 40px", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, background: A_INK, color: A_ORANGE,
            display: "grid", placeItems: "center", fontWeight: 800, fontSize: 16, fontFamily: "'JetBrains Mono', monospace",
          }}>D/</div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.04em" }}>DIPA</div>
            <div style={{ fontSize: 10, color: A_MUTED, letterSpacing: "0.14em", textTransform: "uppercase" }}>UNEMI · 2026</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 0, fontSize: 13, fontWeight: 600, justifyContent: "center" }}>
          {["Inicio", "Gestiones", "Modelo 2026", "Instrumentos", "Equipo", "Contacto"].map((x, i) => (
            <a key={x} href="#" style={{
              color: i === 0 ? A_INK : A_MUTED, textDecoration: "none", padding: "8px 16px",
              borderRight: i < 5 ? `1px solid #e0e0e0` : "none",
              background: i === 0 ? A_CREAM : "transparent",
            }}>{x}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
          <button style={{
            background: A_PAPER, color: A_INK, border: `2px solid ${A_INK}`, padding: "10px 16px",
            fontFamily: "inherit", fontSize: 12, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            BUSCAR
          </button>
          <button style={{
            background: A_INK, color: A_ORANGE, border: `2px solid ${A_INK}`, borderLeft: 0, padding: "10px 18px",
            fontFamily: "inherit", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em",
          }}>ACCESO ↗</button>
        </div>
      </div>
    </header>
  );
}

function AHero() {
  return (
    <section style={{
      borderBottom: `2px solid ${A_INK}`, position: "relative",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", borderBottom: `1px solid #e0e0e0` }}>
        {/* Left: massive type */}
        <div style={{ padding: "70px 40px 60px", borderRight: `2px solid ${A_INK}` }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 40 }}>
            <span style={{
              background: A_INK, color: A_ORANGE, padding: "5px 12px",
              ...aStyles.mono, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
            }}>VOL · 02 / 2026</span>
            <span style={{ ...aStyles.mono, fontSize: 11, color: A_MUTED, letterSpacing: "0.15em" }}>
              ECOSISTEMA GLOBAL DE FORMACIÓN
            </span>
          </div>

          <h1 style={{
            ...aStyles.serif, fontSize: 124, lineHeight: 0.92, margin: 0,
            letterSpacing: "-0.035em", color: A_INK,
          }}>
            Innovación<br />
            <span style={{ color: A_ORANGE, fontStyle: "italic" }}>académica</span><br />
            por <u style={{ textDecorationThickness: 4, textUnderlineOffset: 12, textDecorationColor: A_INK }}>diseño</u>.
            <span style={{ display: "inline-block", marginLeft: 12, fontSize: 18, color: A_MUTED, fontWeight: 700 }}>— Cambios</span>
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 56, paddingTop: 32, borderTop: `1px solid #e0e0e0` }}>
            <p style={{ fontSize: 15, color: "#333", lineHeight: 1.7, margin: 0 }}>
              La DIPA gestiona los procesos académicos de UNEMI y acompaña al profesorado
              con tecnología, pedagogía y visión institucional para el ciclo 2026.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button style={{
                background: A_INK, color: "white", border: 0, padding: "16px 22px",
                fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>EXPLORAR EL MODELO 2026 <span style={{ fontSize: 16 }}>→</span></button>
              <button style={{
                background: A_PAPER, color: A_INK, border: `2px solid ${A_INK}`, padding: "14px 22px",
                fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>VER VIDEO INSTITUCIONAL <span>▶</span></button>
            </div>
          </div>
        </div>

        {/* Right: stacked info blocks */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{
            background: A_INK, color: "white", padding: "32px 32px 28px", flex: 1,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 18, right: 22, ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.15em" }}>FIG · 01</div>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 16 }}>VIDEO · 4:32 MIN</div>
            <h3 style={{ ...aStyles.serif, fontSize: 30, margin: "0 0 24px", lineHeight: 1.1 }}>Modelo Educativo<br />UNEMI <em style={{ color: A_ORANGE }}>2026</em></h3>
            <div style={{
              height: 200, background: `repeating-linear-gradient(45deg, #122a3d, #122a3d 6px, #0d2230 6px, #0d2230 12px)`,
              position: "relative", display: "grid", placeItems: "center",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: A_ORANGE,
                display: "grid", placeItems: "center", cursor: "pointer",
              }}>
                <div style={{ width: 0, height: 0, borderLeft: "16px solid white", borderTop: "10px solid transparent", borderBottom: "10px solid transparent", marginLeft: 5 }} />
              </div>
            </div>
          </div>
          <div style={{ background: A_ORANGE, color: A_INK, padding: "28px 32px", borderTop: `2px solid ${A_INK}` }}>
            <div style={{ ...aStyles.mono, fontSize: 11, letterSpacing: "0.18em", marginBottom: 8, fontWeight: 600 }}>NOTA EDITORIAL</div>
            <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              Una nueva generación de formación superior empieza en UNEMI. Centrada en
              competencias, integración de IA y trayectorias flexibles.
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid #e0e0e0` }}>
        {DIPA_DATA.stats.map((s, i) => (
          <div key={s.label} style={{
            padding: "24px 28px", borderRight: i < 3 ? "1px solid #e0e0e0" : "none",
            background: i === 0 ? A_CREAM : A_PAPER,
            display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16,
          }}>
            <div>
              <div style={{ ...aStyles.mono, fontSize: 10, color: A_MUTED, letterSpacing: "0.15em", marginBottom: 6 }}>0{i + 1} / 04</div>
              <div style={{ fontSize: 12, color: "#333", maxWidth: 180, lineHeight: 1.45, fontWeight: 500 }}>{s.label}</div>
            </div>
            <div style={{ ...aStyles.serif, fontSize: 48, lineHeight: 0.9, color: i === 0 ? A_INK : A_NAVY }}>{s.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AGestiones() {
  return (
    <section style={{ background: A_CREAM, borderBottom: `2px solid ${A_INK}` }}>
      <div style={{ padding: "70px 40px 40px", borderBottom: `1px solid #d8d2c1` }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "end", gap: 32 }}>
          <div style={{ ...aStyles.serif, fontSize: 72, lineHeight: 0.85, color: A_INK }}>
            <span style={{ color: A_ORANGE }}>§</span> 01
          </div>
          <div>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 10, fontWeight: 600 }}>NUESTRAS GESTIONES</div>
            <h2 style={{ ...aStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Dos áreas. Una <em style={{ color: A_ORANGE }}>misión</em>.
            </h2>
          </div>
          <p style={{ fontSize: 13.5, color: "#444", maxWidth: 280, margin: 0, lineHeight: 1.65 }}>
            Trabajamos desde dos frentes complementarios para garantizar la
            transformación continua de los procesos académicos.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {DIPA_DATA.gestiones.map((g, i) => (
          <article key={g.code} className="a-gestion" style={{
            padding: "48px 40px 40px", borderRight: i === 0 ? `2px solid ${A_INK}` : "none",
            background: i === 0 ? A_CREAM : A_PAPER, display: "grid", gridTemplateColumns: "auto 1fr",
            gap: 32, alignItems: "start",
          }}>
            <div style={{
              ...aStyles.serif, fontSize: 140, lineHeight: 0.8, color: i === 0 ? A_NAVY : A_INK,
              fontStyle: "italic", letterSpacing: "-0.04em",
            }}>0{i + 1}</div>
            <div>
              <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.15em", marginBottom: 14, fontWeight: 600 }}>
                ÁREA {i + 1} / 02
              </div>
              <h3 style={{ ...aStyles.serif, fontSize: 32, margin: "0 0 18px", lineHeight: 1.1, letterSpacing: "-0.01em" }}>{g.title}</h3>
              <p style={{ fontSize: 14, color: "#333", margin: "0 0 24px", lineHeight: 1.75 }}>{g.desc}</p>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${i === 0 ? "#d8d2c1" : "#e0e0e0"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <a href="#" style={{ fontSize: 12, color: A_INK, fontWeight: 700, textDecoration: "none", letterSpacing: "0.06em" }}>VER ÁREA COMPLETA →</a>
                <span style={{ ...aStyles.mono, fontSize: 10, color: A_MUTED, letterSpacing: "0.12em" }}>{g.short.toUpperCase()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AEjes() {
  return (
    <section style={{ background: A_PAPER, borderBottom: `2px solid ${A_INK}` }}>
      <div style={{ padding: "70px 40px 30px", borderBottom: `1px solid #e0e0e0` }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", alignItems: "end", gap: 32 }}>
          <div style={{ ...aStyles.serif, fontSize: 72, lineHeight: 0.85, color: A_INK }}>
            <span style={{ color: A_ORANGE }}>§</span> 02
          </div>
          <div>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 10, fontWeight: 600 }}>EJES DEL MODELO 2026</div>
            <h2 style={{ ...aStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Ecosistema en <em style={{ color: A_ORANGE }}>tres dimensiones</em>.
            </h2>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {DIPA_DATA.ejes.map((e, i) => (
          <article key={e.sigla} className="a-eje" style={{
            padding: 0, borderRight: i < 2 ? `1px solid #e0e0e0` : "none",
            position: "relative", overflow: "hidden",
            background: i === 1 ? A_INK : A_PAPER, color: i === 1 ? "white" : A_INK,
            minHeight: 460, display: "flex", flexDirection: "column",
          }}>
            <div style={{
              padding: "30px 32px 0", borderBottom: i === 1 ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e0e0e0",
              display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16,
            }}>
              <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.15em", fontWeight: 600 }}>EJE 0{i + 1}</div>
              <div style={{ ...aStyles.mono, fontSize: 11, color: i === 1 ? "rgba(255,255,255,0.5)" : A_MUTED }}>{e.sigla}</div>
            </div>
            <div style={{ padding: "40px 32px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                ...aStyles.serif, fontSize: 160, lineHeight: 0.8, color: i === 1 ? "white" : A_INK,
                letterSpacing: "-0.05em", fontStyle: "italic", marginBottom: 24,
              }}>
                <span style={{ color: A_ORANGE, fontStyle: "italic" }}>{e.letra}</span>{e.sigla.slice(1)}
              </div>
              <h3 style={{ ...aStyles.serif, fontSize: 26, margin: "0 0 14px", lineHeight: 1.15 }}>{e.titulo}</h3>
              <p style={{ fontSize: 13.5, color: i === 1 ? "rgba(255,255,255,0.75)" : "#444", lineHeight: 1.75, flex: 1, margin: 0 }}>{e.desc}</p>
              <div style={{
                marginTop: 24, paddingTop: 18, borderTop: i === 1 ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e0e0e0",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.tags.map((t) => (
                    <span key={t} style={{
                      ...aStyles.mono, fontSize: 10, padding: "4px 8px",
                      border: i === 1 ? "1px solid rgba(255,255,255,0.2)" : `1px solid ${A_INK}`,
                      color: i === 1 ? "white" : A_INK, letterSpacing: "0.04em",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AModeloDownload() {
  return (
    <section style={{
      background: A_ORANGE, color: A_INK, borderBottom: `2px solid ${A_INK}`,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", borderBottom: `2px solid ${A_INK}` }}>
        <div style={{ padding: "60px 40px", borderRight: `2px solid ${A_INK}`, display: "grid", placeItems: "center" }}>
          <div style={{ ...aStyles.serif, fontSize: 200, lineHeight: 0.8, fontStyle: "italic", letterSpacing: "-0.05em" }}>
            MEU
          </div>
        </div>
        <div style={{ padding: "60px 40px", borderRight: `2px solid ${A_INK}` }}>
          <div style={{ ...aStyles.mono, fontSize: 11, letterSpacing: "0.18em", marginBottom: 18, fontWeight: 600 }}>DOCUMENTO MAESTRO · 2026</div>
          <h3 style={{ ...aStyles.serif, fontSize: 44, margin: "0 0 18px", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Modelo Educativo<br />UNEMI 2026</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: 460, fontWeight: 500 }}>
            Ecosistema Global de Formación por Competencias. Marco conceptual institucional,
            diseño curricular, evaluación auténtica y mejora continua basada en analítica de datos.
          </p>
        </div>
        <div style={{ background: A_INK, color: "white", padding: 0, display: "flex", flexDirection: "column" }}>
          <button style={{
            flex: 1, background: "transparent", color: "white", border: 0, borderBottom: "1px solid rgba(255,255,255,0.15)",
            fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8, padding: 24,
          }}>
            <span style={{ fontSize: 32 }}>↓</span>
            DESCARGAR PDF
          </button>
          <button style={{
            flex: 1, background: "transparent", color: "white", border: 0,
            fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8, padding: 24,
          }}>
            <span style={{ fontSize: 28 }}>↗</span>
            VER ONLINE
          </button>
        </div>
      </div>
      <div style={{ padding: "14px 40px", display: "flex", justifyContent: "space-between", fontSize: 11, ...aStyles.mono, letterSpacing: "0.15em", fontWeight: 600 }}>
        <span>PDF · 2.4 MB · 84 PÁGINAS</span>
        <span>ÚLT. ACTUALIZACIÓN: 2025-10-01</span>
        <span>ISBN 978-9978-XXX-XX-X</span>
      </div>
    </section>
  );
}

function ARepositorio() {
  const [q, setQ] = React.useState("");
  const [tipo, setTipo] = React.useState("Todos");
  const tipos = ["Todos", "Formatos", "Guías", "Lineamientos", "Manuales", "Protocolos"];

  const docs = DIPA_DATA.documentos.filter(d =>
    (tipo === "Todos" || d.tipo === tipo) &&
    (q === "" || d.title.toLowerCase().includes(q.toLowerCase()) || d.code.toLowerCase().includes(q.toLowerCase()))
  );

  const tipoColor = (t) => ({
    Formatos: A_NAVY, "Guías": "#0d6b46", Lineamientos: "#7a3f1d",
    Manuales: A_ORANGE, Protocolos: "#3a3a8a",
  }[t] || A_INK);

  return (
    <section style={{ background: A_PAPER, borderBottom: `2px solid ${A_INK}` }}>
      <div style={{ padding: "70px 40px 30px", borderBottom: `1px solid #e0e0e0` }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "end", gap: 32 }}>
          <div style={{ ...aStyles.serif, fontSize: 72, lineHeight: 0.85, color: A_INK }}>
            <span style={{ color: A_ORANGE }}>§</span> 03
          </div>
          <div>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 10, fontWeight: 600 }}>REPOSITORIO ACADÉMICO</div>
            <h2 style={{ ...aStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              <em style={{ color: A_ORANGE }}>Instrumentos</em> para el currículo.
            </h2>
          </div>
          <div style={{ ...aStyles.mono, fontSize: 11, color: A_MUTED, letterSpacing: "0.12em", textAlign: "right", lineHeight: 1.6 }}>
            {DIPA_DATA.documentos.length} DOCUMENTOS<br />
            5 CATEGORÍAS<br />
            ACT. 2025
          </div>
        </div>
      </div>

      {/* Search bar — architectural */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr auto", borderBottom: `2px solid ${A_INK}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 32px", borderRight: `2px solid ${A_INK}` }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={A_INK} strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nombre o código (ej. FR0018, syllabus, IA…)"
            style={{
              border: 0, outline: "none", flex: 1, fontSize: 17, fontFamily: "inherit",
              background: "transparent", color: A_INK,
            }}
          />
        </div>
        <div style={{ ...aStyles.mono, fontSize: 12, padding: "0 24px", display: "grid", placeItems: "center", background: A_CREAM, letterSpacing: "0.12em", fontWeight: 600 }}>
          {docs.length.toString().padStart(2, "0")} RESULTADOS
        </div>
      </div>

      {/* Filter chips */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(6, 1fr)", borderBottom: `1px solid #e0e0e0`,
      }}>
        {tipos.map((t, i) => {
          const count = t === "Todos" ? DIPA_DATA.documentos.length : DIPA_DATA.documentos.filter(d => d.tipo === t).length;
          const active = tipo === t;
          return (
            <button key={t} onClick={() => setTipo(t)} style={{
              background: active ? A_INK : "transparent",
              color: active ? A_ORANGE : A_INK,
              border: 0, borderRight: i < 5 ? `1px solid #e0e0e0` : "none",
              padding: "20px 16px", fontFamily: "inherit", cursor: "pointer", textAlign: "left",
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <span style={{ ...aStyles.mono, fontSize: 10, letterSpacing: "0.15em", opacity: 0.7 }}>0{i + 1} / 06</span>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.02em" }}>{t}</span>
              <span style={{ ...aStyles.mono, fontSize: 11, opacity: 0.6 }}>{count} DOCS</span>
            </button>
          );
        })}
      </div>

      {/* Cards grid - architectural */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {docs.slice(0, 12).map((d, i) => (
          <article key={d.code} className="a-doc" style={{
            padding: "24px 24px 22px", borderRight: (i + 1) % 3 !== 0 ? "1px solid #e0e0e0" : "none",
            borderBottom: "1px solid #e0e0e0", cursor: "pointer", transition: "background 0.2s",
            display: "flex", flexDirection: "column", gap: 14, minHeight: 200, position: "relative",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{
                background: tipoColor(d.tipo), color: "white", padding: "3px 8px",
                ...aStyles.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
              }}>{d.tipo.toUpperCase()}</span>
              <span style={{ ...aStyles.mono, fontSize: 11, color: A_MUTED, letterSpacing: "0.1em" }}>{d.code}</span>
            </div>
            <h4 style={{ ...aStyles.serif, fontSize: 21, lineHeight: 1.2, margin: 0, flex: 1, color: A_INK, letterSpacing: "-0.005em" }}>{d.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: A_MUTED, paddingTop: 14, borderTop: `1px dashed #d0d0d0` }}>
              <span style={{ ...aStyles.mono, letterSpacing: "0.06em" }}>{d.fecha} · {d.nivel.toUpperCase()}</span>
              <span style={{ color: A_INK, fontWeight: 700, fontSize: 12, fontFamily: "'Montserrat', sans-serif" }}>PDF ↓</span>
            </div>
          </article>
        ))}
      </div>
      <div style={{
        padding: "20px 40px", borderTop: `2px solid ${A_INK}`,
        display: "flex", justifyContent: "space-between", alignItems: "center", background: A_CREAM,
      }}>
        <span style={{ ...aStyles.mono, fontSize: 12, color: A_INK, letterSpacing: "0.1em", fontWeight: 600 }}>
          MOSTRANDO 12 DE {DIPA_DATA.documentos.length}
        </span>
        <button style={{
          background: A_INK, color: A_ORANGE, border: 0, padding: "12px 24px",
          fontFamily: "inherit", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer",
        }}>VER TODO EL ARCHIVO →</button>
      </div>
    </section>
  );
}

function AEquipo() {
  return (
    <section style={{ background: A_CREAM, borderBottom: `2px solid ${A_INK}` }}>
      <div style={{ padding: "70px 40px 30px", borderBottom: `1px solid #d8d2c1` }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", alignItems: "end", gap: 32 }}>
          <div style={{ ...aStyles.serif, fontSize: 72, lineHeight: 0.85, color: A_INK }}>
            <span style={{ color: A_ORANGE }}>§</span> 04
          </div>
          <div>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 10, fontWeight: 600 }}>EQUIPO DE LA DIRECCIÓN</div>
            <h2 style={{ ...aStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Las <em style={{ color: A_ORANGE }}>personas</em> detrás.
            </h2>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {DIPA_DATA.equipo.map((p, i) => (
          <article key={p.nombre} className="a-team" style={{
            background: i === 0 ? A_INK : "transparent",
            color: i === 0 ? "white" : A_INK,
            borderRight: i < 4 ? `1px solid #d8d2c1` : "none",
            padding: 0, display: "flex", flexDirection: "column", minHeight: 360,
          }}>
            <div style={{
              aspectRatio: "1/1", background: i === 0 ? "#0e2536" : A_SAND,
              display: "grid", placeItems: "center", color: i === 0 ? A_ORANGE : A_NAVY,
              ...aStyles.serif, fontSize: 78, fontStyle: "italic", letterSpacing: "-0.04em",
              borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.1)" : `1px solid #d8d2c1`,
              position: "relative",
            }}>
              {p.nombre.split(" ").map(w => w[0]).slice(0,2).join("")}
              <div style={{
                position: "absolute", top: 12, left: 12,
                ...aStyles.mono, fontSize: 10, letterSpacing: "0.15em",
                color: i === 0 ? "rgba(255,255,255,0.5)" : A_MUTED,
              }}>0{i + 1} / 0{DIPA_DATA.equipo.length}</div>
            </div>
            <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ ...aStyles.serif, fontSize: 18, marginBottom: 8, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{p.nombre}</div>
              <div style={{ fontSize: 11.5, color: i === 0 ? "rgba(255,255,255,0.65)" : A_MUTED, lineHeight: 1.5, flex: 1 }}>{p.cargo}</div>
              {i === 0 && (
                <div style={{ marginTop: 12, ...aStyles.mono, fontSize: 10, color: A_ORANGE, letterSpacing: "0.12em" }}>↗ DIRECTOR</div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AFooter() {
  return (
    <footer style={{ background: A_INK, color: "white" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ padding: "50px 40px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, background: A_ORANGE, color: A_INK, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 16, fontFamily: "'JetBrains Mono', monospace" }}>D/</div>
            <div style={{ ...aStyles.serif, fontSize: 22, lineHeight: 1.1 }}>
              Dirección de Innovación de<br />Procesos Académicos
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0, maxWidth: 380 }}>
            Universidad Estatal de Milagro · Km 1.5 Vía Km 26. Milagro, Guayas — Ecuador.
          </p>
          <div style={{ ...aStyles.mono, fontSize: 12, color: A_ORANGE, letterSpacing: "0.1em", marginTop: 18 }}>
            direccion-innovacion@unemi.edu.ec
          </div>
        </div>
        {[
          { t: "Gestiones", l: ["Proyectos Académicos", "Técnica Pedagógica", "Coordinación"] },
          { t: "Recursos", l: ["Repositorio", "Modelo 2026", "Formatos"] },
          { t: "Institución", l: ["UNEMI", "Vicerrectorado", "Intranet"] },
        ].map((col) => (
          <div key={col.t} style={{ padding: "50px 32px", borderRight: col.t !== "Institución" ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
            <div style={{ ...aStyles.mono, fontSize: 11, color: A_ORANGE, letterSpacing: "0.18em", marginBottom: 22, fontWeight: 600 }}>{col.t.toUpperCase()}</div>
            {col.l.map((x) => (
              <a key={x} href="#" style={{ display: "block", color: "rgba(255,255,255,0.78)", textDecoration: "none", fontSize: 13.5, marginBottom: 12 }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11.5, color: "rgba(255,255,255,0.5)",
      }}>
        <span>© 2026 UNEMI · Todos los derechos reservados</span>
        <span style={{ ...aStyles.mono, letterSpacing: "0.15em" }}>DIPA / UNEMI / VOL 02 · 2026</span>
        <a href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>↑ Volver arriba</a>
      </div>
    </footer>
  );
}

function VariationArquitectonica() {
  return (
    <div style={aStyles.root}>
      <style>{`
        .a-gestion:hover { background: ${A_INK} !important; color: white; }
        .a-gestion:hover h3, .a-gestion:hover p, .a-gestion:hover a { color: white !important; }
        .a-gestion:hover [data-num] { color: ${A_ORANGE} !important; }
        .a-eje:hover { background: ${A_NAVY} !important; color: white !important; }
        .a-eje:hover h3, .a-eje:hover p { color: white !important; }
        .a-eje:nth-child(2):hover { background: ${A_ORANGE} !important; }
        .a-eje:nth-child(2):hover h3, .a-eje:nth-child(2):hover p { color: ${A_INK} !important; }
        .a-doc:hover { background: ${A_CREAM} !important; }
        .a-doc:hover h4 { color: ${A_NAVY}; }
        .a-team:hover { background: ${A_INK} !important; color: white !important; }
        .a-team:hover .a-team-init { background: #0e2536 !important; color: ${A_ORANGE} !important; }
      `}</style>
      <AHeader />
      <AHero />
      <AGestiones />
      <AEjes />
      <AModeloDownload />
      <ARepositorio />
      <AEquipo />
      <AFooter />
    </div>
  );
}

window.VariationArquitectonica = VariationArquitectonica;
