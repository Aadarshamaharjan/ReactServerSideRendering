import Helmet from "react-helmet";
import pretty from 'pretty'
export default (markup) => {
    const helmetData = Helmet.renderStatic();
    const html = `<!DOCTYPE html>
    <html>
    <head>
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        <link rel="stylesheet" href="/css/style.css"/>
        <script src="/js/bundle.js" defer></script>
    </head>
    <body>
        <div id="root">
            ${markup}
        </div>
    </body>
    </html>
    `;
    return pretty(html)
};
