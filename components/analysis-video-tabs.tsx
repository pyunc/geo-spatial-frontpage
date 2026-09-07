"use client";

import { useState } from "react";

const analysisVideos = [
  {
    title: "Consultas por Linguagem Natural",
    src: "https://geo-spatial-project.fra1.cdn.digitaloceanspaces.com/Screencast%20From%202026-07-10%2017-39-29.mp4",
  },
  {
    title: "Análises Rápidas Personalizáveis",
    src: "https://cdn.datlo.com/wordpress-media/painel_analises_rapidas_compactado.mp4",
  },
  {
    title: "Upload e Cruzamento de dados",
    src: "https://cdn.datlo.com/wordpress-media/importacao_e_cruzamento_compactado.mp4",
  },
  {
    title: "Recomendação de dados",
    src: "https://cdn.datlo.com/wordpress-media/importacao_e_cruzamento_compactado.mp4",
  },
  {
    title: "Recomendação de dados",
    src: "https://cdn.datlo.com/wordpress-media/importacao_e_cruzamento_compactado.mp4",
  },
  {
    title: "Recomendação de dados",
    src: "https://cdn.datlo.com/wordpress-media/importacao_e_cruzamento_compactado.mp4",
  },
];

export function AnalysisVideoTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = analysisVideos[activeIndex];

  return (
    <div className="analysis-video-tabs">
      <div className="analysis-video-tabs__list" role="tablist" aria-label="Demonstrações de análises">
        {analysisVideos.map((video, index) => (
          <button
            aria-selected={activeIndex === index}
            className="analysis-video-tabs__tab"
            key={video.title}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {video.title}
          </button>
        ))}
      </div>

      <div className="analysis-video-tabs__media" role="tabpanel" aria-label={activeVideo.title}>
        <video autoPlay controls key={activeVideo.src} loop muted playsInline preload="metadata">
          <source src={activeVideo.src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
