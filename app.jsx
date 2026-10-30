/* global React, ReactDOM */
const { useEffect, useState } = React;

const THEME = {
  heroLayout: "mono",
  projectsLayout: "index",
  gridLayout: "asym",
  typePair: "poppins",
  accent: "airforce",
  density: 1,
};

function App() {
  const [lang, setLang] = useState("es");
  const [openProject, setOpenProject] = useState(null);
  const copy = window.CONTENT[lang];

  useEffect(() => {
    window.applyTypePair(THEME.typePair);
    window.applyAccent(THEME.accent);
    window.applyDensity(THEME.density);
  }, []);

  return (
    <React.Fragment>
      <window.CustomCursor lang={lang} />
      <window.Nav lang={lang} setLang={setLang} t={copy} />
      <main>
        <div style={{ height: "90px", background: "linear-gradient(rgba(13,22,32,.4),rgba(13,22,32,.5)),url('/qccs-banda.jpg') center/cover", marginTop: "79px" }} aria-hidden="true"></div>
        <div className="odr-block" style={{ textAlign: "center", padding: "clamp(16px,4vw,32px) 16px 0", color: "#14233D" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.42em", textTransform: "uppercase", opacity: 0.55, marginBottom: "clamp(8px,2.5vw,14px)" }}>División</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", gap: "clamp(12px,4vw,26px)", fontWeight: 400, maxWidth: "100%" }}>
            <span style={{ fontSize: "clamp(12px,3.2vw,16px)", letterSpacing: "0.04em" }}><span style={{ fontSize: "clamp(30px,8vw,40px)" }}>O</span>BRAS</span>
            <span style={{ fontSize: "clamp(12px,3.2vw,16px)", letterSpacing: "0.04em" }}><span style={{ fontSize: "clamp(30px,8vw,40px)" }}>D</span>ISEÑO</span>
            <span style={{ fontSize: "clamp(12px,3.2vw,16px)", letterSpacing: "0.04em" }}><span style={{ fontSize: "clamp(30px,8vw,40px)" }}>R</span>EMODELACIONES</span>
          </div>
        </div>
        <window.Hero t={copy} layout={THEME.heroLayout} lang={lang} />
        <window.Statement t={copy} />
        <div style={{ height: "90px", background: "linear-gradient(rgba(13,22,32,.4),rgba(13,22,32,.5)),url('/qccs-banda.jpg') center/cover", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a href="https://qualitycontrolconsultants.pro" target="_blank" rel="noopener">
            <img src="/logo-qccs-blanco.png" alt="QCCS — Quality Control Consultants" style={{ height: "26px" }} />
          </a>
        </div>
        <window.Projects
          t={copy}
          lang={lang}
          layout={THEME.projectsLayout}
          gridVariant={THEME.gridLayout}
          onOpen={(i) => setOpenProject(i)}
        />
        <div style={{ height: "90px", background: "linear-gradient(rgba(13,22,32,.4),rgba(13,22,32,.5)),url('/qccs-banda.jpg') center/cover", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a href="https://qualitycontrolconsultants.pro" target="_blank" rel="noopener">
            <img src="/logo-qccs-blanco.png" alt="QCCS — Quality Control Consultants" style={{ height: "26px" }} />
          </a>
        </div>
        <window.Foot t={copy} lang={lang} />
      </main>
      <window.ProjectDetail
        indexOpen={openProject}
        onClose={() => setOpenProject(null)}
        onNav={(i) => setOpenProject(i)}
        lang={lang}
        t={copy}
      />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
