const leftDatasets = [
  "Dados Cadastrais",
  "Dados Fiscais",
  "Dados Estimados",
  "Dados Online",
  "Dados Localizados",
  "Dados Segmentados",
];

const rightDatasets = [
  "Dados Censitários",
  "Dados Econômicos",
  "Dados de Consumo",
  "Dados Comerciais",
  "Dados Mobile",
  "Dados Proprietários",
];

const leftPaths = [
  "M238 78 C430 78 436 552 593 600",
  "M292 168 C468 168 466 552 593 600",
  "M384 258 C530 258 498 562 593 600",
  "M342 348 C518 348 506 568 593 600",
  "M248 438 C448 438 462 572 593 600",
  "M388 532 C520 532 520 584 593 600",
];

const rightPaths = [
  "M962 78 C770 78 760 552 607 600",
  "M908 168 C730 168 734 552 607 600",
  "M816 258 C670 258 702 562 607 600",
  "M858 348 C682 348 694 568 607 600",
  "M952 438 C752 438 738 572 607 600",
  "M812 532 C680 532 680 584 607 600",
];

function DatasetPill({ label, exclusive = false }: { label: string; exclusive?: boolean }) {
  return (
    <span className="dataset-pill">
      <span>{label}</span>
      <strong>+</strong>
      {exclusive ? <em>Exclusivo</em> : null}
    </span>
  );
}

export function DataUniverse() {
  return (
    <div className="data-universe" aria-hidden="true">
      <svg className="data-universe__wires" viewBox="0 0 1200 720" preserveAspectRatio="none">
        <defs>
          <radialGradient id="dataHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7be0b8" stopOpacity="0.38" />
            <stop offset="58%" stopColor="#7ccbd3" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#7be0b8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dataWire" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7be0b8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {leftPaths.map((path) => (
          <path d={path} key={path} />
        ))}
        {rightPaths.map((path) => (
          <path d={path} key={path} />
        ))}
        <circle cx="600" cy="608" fill="url(#dataHubGlow)" r="105" />
        <circle className="data-universe__ring" cx="600" cy="608" r="42" />
        <circle className="data-universe__ring data-universe__ring--two" cx="600" cy="608" r="58" />
        <circle className="data-universe__ring data-universe__ring--three" cx="600" cy="608" r="76" />
      </svg>

      <div className="data-universe__columns">
        <div className="data-universe__column data-universe__column--left">
          {leftDatasets.map((label) => (
            <DatasetPill key={label} label={label} />
          ))}
        </div>

        <div className="data-universe__hub">
          <span>rua1.ai</span>
        </div>

        <div className="data-universe__column data-universe__column--right">
          {rightDatasets.map((label) => (
            <DatasetPill exclusive={label === "Dados Mobile"} key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
