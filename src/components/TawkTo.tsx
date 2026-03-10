"use client";

import Script from "next/script";

export default function TawkTo() {
  const tawkId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  if (!tawkId || tawkId === "YOUR_TAWK_PROPERTY_ID") return null;

  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (function(){
          var s1 = document.createElement("script"),
              s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/${tawkId}/default';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  );
}
