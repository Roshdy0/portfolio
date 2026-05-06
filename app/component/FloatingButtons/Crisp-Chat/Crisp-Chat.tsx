"use client";

import Script from "next/script";

const CrispChat = () => {
  return (
    <Script
      id="crisp-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="9dd32200-147e-4855-a9e1-8f347dc52786";
          (function(){
            var d=document;
            var s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `,
      }}
    />
  );
};

export default CrispChat;
