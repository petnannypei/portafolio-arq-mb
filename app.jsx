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
        <window.Hero t={copy} layout={THEME.heroLayout} lang={lang} />
        <window.Statement t={copy} />
        <window.Projects
          t={copy}
          lang={lang}
          layout={THEME.projectsLayout}
          gridVariant={THEME.gridLayout}
          onOpen={(i) => setOpenProject(i)}
        />
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
