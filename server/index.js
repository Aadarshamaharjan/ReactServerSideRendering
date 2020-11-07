import express from "express";
import React from "react";
import {renderToString} from 'react-dom/server'
import {StaticRouter} from "react-router";
import App from "../src/App";
import htmlToRender from "./htmlToRender";

const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>
    );
    res.send(htmlToRender(markup));
});
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening : http://localhost:${port}`);
});
