// site-tweaks.jsx — direction switcher + sub-tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "c",
  "grid": "asymmetric",
  "accent": "olive"
}/*EDITMODE-END*/;

const DIRECTIONS = [
  { value: "a", label: "Журнал", desc: "Editorial · DM Serif · cream + terracotta" },
  { value: "b", label: "Уют",    desc: "Cozy · Cormorant italic · oat + clay" },
  { value: "c", label: "Ателье", desc: "Atelier · Tenor caps · linen + olive" },
];

const ACCENTS = {
  a: { default: "#b8593b", deep: "#8a3b22", olive: "#5d6147", ink: "#1a1612" },
  b: { default: "#c87a52", deep: "#a4533a", olive: "#7a7a4e", ink: "#2a201a" },
  c: { default: "#5d6147", deep: "#3f4231", olive: "#6b4a2f", ink: "#1d1d1b" },
};

function applyDirection(d) {
  document.documentElement.setAttribute("data-direction", d);
}
function applyGrid(g) {
  document.documentElement.setAttribute("data-grid", g);
}
function applyAccent(d, a) {
  const map = ACCENTS[d] || ACCENTS.a;
  const c = map[a] || map.default;
  document.documentElement.style.setProperty("--accent", c);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyDirection(t.direction); }, [t.direction]);
  React.useEffect(() => { applyGrid(t.grid); }, [t.grid]);
  React.useEffect(() => { applyAccent(t.direction, t.accent); }, [t.direction, t.accent]);

  return (
    <TweaksPanel title="Tweaks · Римские шторы">
      <TweakSection label="Direction" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {DIRECTIONS.map(d => {
          const active = t.direction === d.value;
          return (
            <button
              key={d.value}
              onClick={() => setTweak("direction", d.value)}
              style={{
                textAlign: "left",
                padding: "10px 12px",
                border: active ? "1px solid #29261b" : "1px solid rgba(41,38,27,.15)",
                background: active ? "rgba(41,38,27,.06)" : "transparent",
                borderRadius: 8,
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".01em" }}>{d.label}</span>
              <span style={{ fontSize: 10.5, color: "rgba(41,38,27,.55)", letterSpacing: 0 }}>{d.desc}</span>
            </button>
          );
        })}
      </div>

      <TweakSection label="Portfolio grid" />
      <TweakRadio
        label="Layout"
        value={t.grid}
        options={["asymmetric", "uniform"]}
        onChange={(v) => setTweak("grid", v)}
      />

      <TweakSection label="Accent color" />
      <TweakRadio
        label="Tone"
        value={t.accent}
        options={["default", "deep", "olive", "ink"]}
        onChange={(v) => setTweak("accent", v)}
      />

      <TweakSection label="" />
      <div style={{ fontSize: 10.5, color: "rgba(41,38,27,.5)", lineHeight: 1.5 }}>
        Click hero / portfolio tiles to drop in real photos. Drag the panel header to move.
      </div>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
