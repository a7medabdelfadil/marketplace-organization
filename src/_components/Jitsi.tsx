"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function JitsiComponent() {
  const jitsiRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadJitsi = () => {
      const domain = "meet.jit.si";
      const options = {
        roomName: "OpreamRoom",
        parentNode: jitsiRef.current,
        configOverwrite: { startWithAudioMuted: true },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_BRAND_WATERMARK: false,
          HIDE_DEEP_LINKING_LOGO: true,

          DEFAULT_LOGO_URL: "",
          JITSI_WATERMARK_LINK: "",
        },
      };

      const api = new (window as any).JitsiMeetExternalAPI(domain, options);

      api.addListener("participantJoined", (e: any) => {
        console.log("Participant joined:", e.displayName);
      });

      api.addListener("participantLeft", (e: any) => {
        console.log("Participant left:", e.id);
      });

      return api;
    };

    if ((window as any).JitsiMeetExternalAPI) {
      const apiInstance = loadJitsi();
      return () => apiInstance.dispose();
    }
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src="https://meet.jit.si/external_api.js"
        strategy="beforeInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
<div ref={jitsiRef} className="w-full h-screen" />    </>
  );
}
