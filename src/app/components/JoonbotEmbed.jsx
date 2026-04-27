"use client";

import { useEffect, useState } from "react";

const JOONBOT_WIDGET_ID = "e220051e-4abc-4ad5-baac-c0eff740af2f";

export default function JoonbotEmbed() {
  const [embedSrc, setEmbedSrc] = useState("");

  useEffect(() => {
    const locationHref = window.location.href;
    const params = new URLSearchParams({
      id: JOONBOT_WIDGET_ID,
      width: "500px",
      height: "100%",
      locationHref,
      iframeMode: "embed",
      mode: "embed",
    });

    setEmbedSrc(`https://page.joonbot.com/e220051e-4abc-4ad5-baac-c0eff740af2f#${params.toString()}`);
  }, []);

  return (
    <div id="joonbot-embed" className="joonbot-embed-container">
      {embedSrc ? (
        <iframe
          id="joinup-widget"
          title="Joonbot embed"
          src={embedSrc}
          style={{ width: "100%", height: "100%", border: "none", background: "transparent" }}
          allowFullScreen
        />
      ) : null}
    </div>
  );
}
