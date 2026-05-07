"use client";

import Script from "next/script";

const websiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

const CrispChat = () => {
  return (
    <Script
      id="crisp-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID = "${websiteId}";
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
