// Variación A — "Editorial Académica"
// Instrument Serif display + Montserrat body. Whitespace, asimetría, magazine.

const E_NAVY = "#002334";
const E_ORANGE = "#f37021";
const E_INK = "#0e1620";
const E_PAPER = "#fbfaf6";
const E_LINE = "#e7e2d6";
const E_MUTED = "#6b6b6b";

const eStyles = {
  root: {
    fontFamily: "'Montserrat', sans-serif",
    background: E_PAPER,
    color: E_INK,
    width: 1440,
    minHeight: "100%",
    overflow: "hidden",
    fontSize: 15,
    lineHeight: 1.55,
    letterSpacing: 0,
  },
  serif: { fontFamily: "'Instrument Serif', 'Source Serif 4', Georgia, serif", fontWeight: 400, letterSpacing: "-0.01em" },
  mono: { fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: 0 },
};

function EHeader() {
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "22px 56px", borderBottom: `1px solid ${E_LINE}`, background: E_PAPER,
      position: "sticky", top: 0, zIndex: 5,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%", background: E_NAVY,
          color: "white", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 13,
        }}>U</div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.18em", color: E_MUTED, textTransform: "uppercase", fontWeight: 600 }}>Universidad Estatal de Milagro</span>
          <span style={{ ...eStyles.serif, fontSize: 22, color: E_INK, marginTop: 2 }}>Dirección de Innovación de Procesos Académicos</span>
        </div>
      </div>
      <nav style={{ display: "flex", gap: 32, alignItems: "center", fontSize: 13, fontWeight: 500 }}>
        {["Gestiones", "Modelo 2026", "Instrumentos", "Equipo", "Contacto"].map((x, i) => (
          <a key={x} href="#" style={{ color: i === 0 ? E_INK : E_MUTED, textDecoration: "none", letterSpacing: "0.02em" }}>{x}</a>
        ))}
        <button style={{
          background: E_NAVY, color: "white", border: 0, padding: "10px 18px", borderRadius: 999,
          fontFamily: "inherit", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
        }}>Acceso docente →</button>
      </nav>
    </header>
  );
}

function EHero() {
  return (
    <section style={{ padding: "90px 56px 70px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "end" }}>
        <div>
          <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.2em", marginBottom: 28, fontWeight: 500 }}>
            VOL. 02 · CICLO 2026 — ECOSISTEMA DE FORMACIÓN
          </div>
          <h1 style={{
            ...eStyles.serif, fontSize: 88, lineHeight: 0.96, margin: 0, color: E_INK,
            letterSpacing: "-0.025em",
          }}>
            Transformamos<br />
            los procesos<br />
            académicos con<br />
            <em style={{ color: E_ORANGE, fontStyle: "italic" }}>visión pedagógica.</em>
          </h1>
        </div>
        <div style={{ paddingBottom: 14 }}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#3a3a3a", maxWidth: 460, margin: "0 0 28px" }}>
            La DIPA gestiona los procesos académicos de UNEMI y brinda soporte al profesorado
            en los diferentes ambientes de aprendizaje, incorporando tecnologías que fortalecen
            la enseñanza y la calidad educativa.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
            <button style={{
              background: E_INK, color: "white", border: 0, padding: "14px 24px",
              fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer",
            }}>Conozca nuestra gestión →</button>
            <button style={{
              background: "transparent", color: E_INK, border: `1px solid ${E_INK}`,
              padding: "14px 24px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer",
            }}>Ver video institucional</button>
          </div>
        </div>
      </div>

      {/* Imagen editorial */}
      <div style={{
        marginTop: 70, height: 380, background: `linear-gradient(135deg, ${E_NAVY} 0%, #0a3a5e 100%)`,
        borderRadius: 4, position: "relative", overflow: "hidden",
        display: "grid", placeItems: "center",
      }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.18 }} aria-hidden>
          <defs>
            <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div style={{ position: "relative", color: "white", textAlign: "center" }}>
          <div style={{
            width: 86, height: 86, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.6)",
            display: "grid", placeItems: "center", margin: "0 auto 22px", cursor: "pointer",
          }}>
            <div style={{ width: 0, height: 0, borderLeft: "20px solid white", borderTop: "12px solid transparent", borderBottom: "12px solid transparent", marginLeft: 6 }} />
          </div>
          <div style={{ ...eStyles.mono, fontSize: 11, letterSpacing: "0.2em", opacity: 0.7 }}>VIDEO INSTITUCIONAL · 4:32</div>
          <div style={{ ...eStyles.serif, fontSize: 32, marginTop: 10 }}>Modelo Educativo UNEMI 2026</div>
        </div>
      </div>

      {/* Stats inline */}
      <div style={{
        marginTop: 56, paddingTop: 36, borderTop: `1px solid ${E_LINE}`,
        display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40,
      }}>
        {DIPA_DATA.stats.map((s) => (
          <div key={s.label}>
            <div style={{ ...eStyles.serif, fontSize: 56, lineHeight: 1, color: E_NAVY }}>{s.num}</div>
            <div style={{ fontSize: 12, color: E_MUTED, marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EGestiones() {
  return (
    <section style={{ padding: "100px 56px", background: "white", borderTop: `1px solid ${E_LINE}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64 }}>
        <div>
          <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.2em", marginBottom: 16 }}>§ 01 — NUESTRAS GESTIONES</div>
          <h2 style={{ ...eStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Dos áreas,<br />
            <em style={{ color: E_ORANGE, fontStyle: "italic" }}>una visión.</em>
          </h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 580, alignSelf: "end", margin: 0 }}>
          Conozca las gestiones que impulsan la innovación académica y fortalecen
          la calidad educativa institucional desde dos frentes complementarios.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {DIPA_DATA.gestiones.map((g) => (
          <article key={g.code} style={{
            border: `1px solid ${E_LINE}`, padding: "40px 36px 36px", background: E_PAPER, position: "relative",
            transition: "all 0.3s",
          }}>
            <div style={{ ...eStyles.mono, fontSize: 11, color: E_MUTED, letterSpacing: "0.18em", marginBottom: 24 }}>
              0{g.code.slice(-1)} / 02 · GESTIÓN
            </div>
            <div style={{ height: 220, background: `linear-gradient(135deg, ${E_NAVY}, #1a4a72)`, marginBottom: 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 16, left: 18, color: "white", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em" }}>
                {g.short.toUpperCase()}
              </div>
            </div>
            <h3 style={{ ...eStyles.serif, fontSize: 32, margin: "0 0 16px", lineHeight: 1.05 }}>{g.title}</h3>
            <p style={{ color: "#3a3a3a", fontSize: 14.5, lineHeight: 1.7, margin: "0 0 28px" }}>{g.desc}</p>
            <a href="#" style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: E_INK,
              textDecoration: "none", borderBottom: `2px solid ${E_ORANGE}`, paddingBottom: 4, textTransform: "uppercase",
            }}>Conocer área →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function EEjes() {
  return (
    <section style={{ padding: "100px 56px", background: E_PAPER }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
        <div>
          <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.2em", marginBottom: 16 }}>§ 02 — EJES ESTRATÉGICOS</div>
          <h2 style={{ ...eStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Ecosistema de<br /><em style={{ color: E_ORANGE, fontStyle: "italic" }}>Formación 2026</em>
          </h2>
        </div>
        <p style={{ fontSize: 15, color: E_MUTED, maxWidth: 360, margin: 0, lineHeight: 1.65 }}>
          Tres dimensiones estratégicas que transforman los procesos académicos
          desde el aula hasta la trayectoria del estudiante.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        {DIPA_DATA.ejes.map((e, i) => (
          <article key={e.sigla} style={{
            background: "white", border: `1px solid ${E_LINE}`, padding: 36,
            display: "flex", flexDirection: "column", minHeight: 360,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div style={{ ...eStyles.serif, fontSize: 88, lineHeight: 0.85, color: E_NAVY }}>
                <span style={{ color: E_ORANGE, fontStyle: "italic" }}>{e.letra}</span>{e.sigla.slice(1)}
              </div>
              <div style={{ ...eStyles.mono, fontSize: 10, color: E_MUTED, letterSpacing: "0.18em" }}>0{i + 1}</div>
            </div>
            <h3 style={{ ...eStyles.serif, fontSize: 26, margin: "26px 0 14px", lineHeight: 1.1 }}>{e.titulo}</h3>
            <p style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.7, flex: 1, margin: 0 }}>{e.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24, paddingTop: 20, borderTop: `1px solid ${E_LINE}` }}>
              {e.tags.map((t) => (
                <span key={t} style={{ ...eStyles.mono, fontSize: 10.5, color: E_INK, padding: "5px 10px", border: `1px solid ${E_LINE}`, letterSpacing: "0.04em" }}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EModeloDownload() {
  return (
    <section style={{ padding: "80px 56px", background: "white", borderTop: `1px solid ${E_LINE}`, borderBottom: `1px solid ${E_LINE}` }}>
      <div style={{
        background: E_INK, color: "white", padding: "56px 64px",
        display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 48,
      }}>
        <div style={{ ...eStyles.serif, fontSize: 96, lineHeight: 0.9, color: E_ORANGE, fontStyle: "italic" }}>MEU</div>
        <div>
          <div style={{ ...eStyles.mono, fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>DOCUMENTO MAESTRO · 2026</div>
          <h3 style={{ ...eStyles.serif, fontSize: 36, margin: "0 0 12px", lineHeight: 1.1 }}>Modelo Educativo UNEMI 2026</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: 0, lineHeight: 1.65 }}>
            Ecosistema Global de Formación por Competencias. Marco conceptual institucional,
            diseño curricular, evaluación auténtica y mejora continua basada en analítica de datos.
          </p>
        </div>
        <button style={{
          background: E_ORANGE, color: "white", border: 0, padding: "18px 28px",
          fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer",
          whiteSpace: "nowrap",
        }}>↓ DESCARGAR PDF</button>
      </div>
    </section>
  );
}

function ERepositorio() {
  const [q, setQ] = React.useState("");
  const [tipo, setTipo] = React.useState("Todos");
  const tipos = ["Todos", "Formatos", "Guías", "Lineamientos", "Manuales", "Protocolos"];

  const docs = DIPA_DATA.documentos.filter(d =>
    (tipo === "Todos" || d.tipo === tipo) &&
    (q === "" || d.title.toLowerCase().includes(q.toLowerCase()) || d.code.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section style={{ padding: "100px 56px", background: E_PAPER }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.2em", marginBottom: 16 }}>§ 03 — REPOSITORIO</div>
        <h2 style={{ ...eStyles.serif, fontSize: 56, margin: "0 0 18px", lineHeight: 1, letterSpacing: "-0.02em" }}>
          Instrumentos<br /><em style={{ color: E_ORANGE, fontStyle: "italic" }}>académicos.</em>
        </h2>
        <p style={{ fontSize: 15, color: E_MUTED, maxWidth: 640, margin: 0, lineHeight: 1.7 }}>
          Documentos primarios y secundarios para la implementación del currículo. Busque por nombre,
          código o filtre por tipo de instrumento.
        </p>
      </div>

      {/* Search + filters */}
      <div style={{
        background: "white", border: `1px solid ${E_LINE}`, padding: "20px 24px",
        display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center", marginBottom: 28,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={E_MUTED} strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            value={q} onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nombre o código del instrumento…"
            style={{
              border: 0, outline: "none", flex: 1, fontSize: 15, fontFamily: "inherit",
              background: "transparent", color: E_INK,
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {tipos.map((t) => (
            <button key={t} onClick={() => setTipo(t)} style={{
              background: tipo === t ? E_INK : "transparent", color: tipo === t ? "white" : E_INK,
              border: `1px solid ${tipo === t ? E_INK : E_LINE}`, padding: "8px 14px",
              fontSize: 12, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
              letterSpacing: "0.02em",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ ...eStyles.mono, fontSize: 11, color: E_MUTED, letterSpacing: "0.1em", marginBottom: 14 }}>
        {docs.length} DOCUMENTOS · ORDENADOS POR FECHA
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {docs.slice(0, 12).map((d) => (
          <article key={d.code} className="e-doc-card" style={{
            background: "white", border: `1px solid ${E_LINE}`, padding: 22,
            display: "flex", flexDirection: "column", gap: 14, transition: "all 0.25s",
            cursor: "pointer", minHeight: 170,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ ...eStyles.mono, fontSize: 10.5, color: E_ORANGE, letterSpacing: "0.1em", fontWeight: 600 }}>{d.code}</span>
              <span style={{ fontSize: 10.5, color: E_MUTED, padding: "3px 8px", border: `1px solid ${E_LINE}`, letterSpacing: "0.04em" }}>{d.tipo}</span>
            </div>
            <h4 style={{ ...eStyles.serif, fontSize: 19, lineHeight: 1.25, margin: 0, flex: 1, color: E_INK }}>{d.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: E_MUTED, paddingTop: 12, borderTop: `1px solid ${E_LINE}` }}>
              <span>{d.nivel} · {d.fecha}</span>
              <span style={{ color: E_INK, fontWeight: 600 }}>PDF ↓</span>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 36, textAlign: "center" }}>
        <button style={{
          background: "transparent", border: `1px solid ${E_INK}`, padding: "14px 28px",
          fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", color: E_INK,
        }}>Ver los {DIPA_DATA.documentos.length} instrumentos →</button>
      </div>
    </section>
  );
}

function EEquipo() {
  return (
    <section style={{ padding: "100px 56px", background: "white", borderTop: `1px solid ${E_LINE}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }}>
        <div>
          <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.2em", marginBottom: 16 }}>§ 04 — EQUIPO</div>
          <h2 style={{ ...eStyles.serif, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Detrás de<br /><em style={{ color: E_ORANGE, fontStyle: "italic" }}>la dirección.</em>
          </h2>
        </div>
        <p style={{ fontSize: 16, color: "#3a3a3a", maxWidth: 540, alignSelf: "end", margin: 0, lineHeight: 1.7 }}>
          Un equipo multidisciplinario comprometido con la calidad educativa y la transformación
          continua de los procesos académicos institucionales.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
        {DIPA_DATA.equipo.map((p, i) => (
          <div key={p.nombre}>
            <div style={{
              aspectRatio: "3/4", background: i === 0 ? E_NAVY : "#e4ddc9", marginBottom: 16,
              display: "grid", placeItems: "center", color: i === 0 ? "white" : E_NAVY,
              fontFamily: "'Instrument Serif', serif", fontSize: 72, lineHeight: 1, fontStyle: "italic",
            }}>{p.nombre.split(" ").map(w => w[0]).slice(0,2).join("")}</div>
            <div style={{ ...eStyles.serif, fontSize: 18, color: E_INK, marginBottom: 4 }}>{p.nombre}</div>
            <div style={{ fontSize: 12, color: E_MUTED, lineHeight: 1.5 }}>{p.cargo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EFooter() {
  return (
    <footer style={{ padding: "70px 56px 32px", background: E_INK, color: "white" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40, marginBottom: 60 }}>
        <div>
          <div style={{ ...eStyles.serif, fontSize: 28, marginBottom: 12, lineHeight: 1.1 }}>
            Dirección de Innovación de Procesos Académicos
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 24 }}>
            Universidad Estatal de Milagro · Km 1.5 Vía Km 26<br />
            Milagro, Guayas — Ecuador
          </div>
          <div style={{ ...eStyles.mono, fontSize: 11, color: E_ORANGE, letterSpacing: "0.1em" }}>
            direccion-innovacion@unemi.edu.ec
          </div>
        </div>
        {[
          { t: "Gestiones", l: ["Proyectos Académicos", "Técnica Pedagógica"] },
          { t: "Recursos", l: ["Repositorio", "Modelo 2026", "Calendario"] },
          { t: "Institución", l: ["UNEMI", "Vicerrectorado", "Intranet"] },
        ].map((col) => (
          <div key={col.t}>
            <div style={{ ...eStyles.mono, fontSize: 10.5, color: E_ORANGE, letterSpacing: "0.18em", marginBottom: 18 }}>{col.t.toUpperCase()}</div>
            {col.l.map((x) => (
              <a key={x} href="#" style={{ display: "block", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, marginBottom: 10 }}>{x}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)" }}>© 2026 UNEMI. Todos los derechos reservados.</div>
        <div style={{ ...eStyles.mono, fontSize: 10.5, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em" }}>DIPA / UNEMI / V2.0</div>
      </div>
    </footer>
  );
}

function VariationEditorial() {
  return (
    <div style={eStyles.root}>
      <style>{`
        .e-doc-card:hover {
          border-color: ${E_INK} !important;
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(0,35,52,0.08);
        }
      `}</style>
      <EHeader />
      <EHero />
      <EGestiones />
      <EEjes />
      <EModeloDownload />
      <ERepositorio />
      <EEquipo />
      <EFooter />
    </div>
  );
}

window.VariationEditorial = VariationEditorial;
