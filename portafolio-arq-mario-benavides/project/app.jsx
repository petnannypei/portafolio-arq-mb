/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakColor, TweakSlider, TweakToggle */
const { useEffect, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "es",
  "heroLayout": "mono",
  "projectsLayout": "index",
  "gridLayout": "asym",
  "typePair": "poppins",
  "accent": "airforce",
  "density": 1
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openProject, setOpenProject] = useState(null);
  const lang = t.lang === "en" ? "en" : "es";
  const copy = window.CONTENT[lang];

  // Apply theme tweaks
  useEffect(() => { window.applyTypePair(t.typePair); }, [t.typePair]);
  useEffect(() => { window.applyAccent(t.accent); }, [t.accent]);
  useEffect(() => { window.applyDensity(t.density); }, [t.density]);

  const setLang = (next) => setTweak("lang", next);

  return (
    <React.Fragment>
      <window.CustomCursor lang={lang} />
      <window.Nav lang={lang} setLang={setLang} t={copy} />
      <main>
        <window.Hero t={copy} layout={t.heroLayout} lang={lang} />
        <window.Statement t={copy} />
        <window.Projects
          t={copy}
          lang={lang}
          layout={t.projectsLayout}
          gridVariant={t.gridLayout}
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

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === "es" ? "Idioma" : "Language"}>
          <TweakRadio
            label={lang === "es" ? "Idioma" : "Language"}
            value={t.lang}
            onChange={(v) => setTweak("lang", v)}
            options={[{ value: "es", label: "ES" }, { value: "en", label: "EN" }]}
          />
        </TweakSection>

        <TweakSection label={lang === "es" ? "Layout" : "Layout"}>
          <TweakSelect
            label={lang === "es" ? "Hero" : "Hero"}
            value={t.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "mono", label: lang === "es" ? "Monograma · sin imagen" : "Monogram · type-only" },
              { value: "split", label: lang === "es" ? "Split editorial" : "Editorial split" },
              { value: "bleed", label: lang === "es" ? "Imagen full-bleed" : "Full-bleed image" },
              { value: "sober", label: lang === "es" ? "Sobrio · imagen abajo" : "Sober · image below" },
            ]}
          />
          <TweakSelect
            label={lang === "es" ? "Proyectos" : "Projects"}
            value={t.projectsLayout}
            onChange={(v) => setTweak("projectsLayout", v)}
            options={[
              { value: "index", label: lang === "es" ? "Índice editorial" : "Editorial index" },
              { value: "bento", label: lang === "es" ? "Grilla bento" : "Bento grid" },
            ]}
          />
          <TweakSelect
            label={lang === "es" ? "Variante grilla" : "Grid variant"}
            value={t.gridLayout}
            onChange={(v) => setTweak("gridLayout", v)}
            options={[
              { value: "asym", label: lang === "es" ? "Asimétrica clara" : "Clear asymmetric" },
              { value: "mosaic", label: lang === "es" ? "Mosaico irregular" : "Irregular mosaic" },
              { value: "calm", label: lang === "es" ? "Calma editorial" : "Editorial calm" },
            ]}
          />
        </TweakSection>

        <TweakSection label={lang === "es" ? "Tipografía" : "Typography"}>
          <TweakSelect
            label={lang === "es" ? "Pareja" : "Pairing"}
            value={t.typePair}
            onChange={(v) => setTweak("typePair", v)}
            options={[
              { value: "poppins", label: "Poppins Light" },
              { value: "montserrat", label: "Montserrat Light" },
              { value: "fraunces", label: "Fraunces · Poppins" },
            ]}
          />
        </TweakSection>

        <TweakSection label={lang === "es" ? "Acento" : "Accent"}>
          <TweakColor
            label={lang === "es" ? "Color" : "Color"}
            value={window.ACCENTS[t.accent]}
            onChange={(hex) => {
              const key = Object.keys(window.ACCENTS).find(k => window.ACCENTS[k] === hex) || "airforce";
              setTweak("accent", key);
            }}
            options={[window.ACCENTS.airforce, window.ACCENTS.yale, window.ACCENTS.cambridge, window.ACCENTS.sage]}
          />
        </TweakSection>

        <TweakSection label={lang === "es" ? "Densidad" : "Density"}>
          <TweakSlider
            label={lang === "es" ? "Espaciado" : "Spacing"}
            value={t.density}
            onChange={(v) => setTweak("density", v)}
            min={0.7}
            max={1.4}
            step={0.05}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
