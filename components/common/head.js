import React from "react";

export default function CustomHead() {
    return (
        <>
            <script
                async
                src='https://www.googletagmanager.com/gtag/js?id=G-X8HTQKWCMY'
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-X8HTQKWCMY');
                    `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
          (function() {
            const theme = localStorage.getItem('theme') || 'bussiness';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
                }}
            />
        </>
    );
}
