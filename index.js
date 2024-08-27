import { ChemicalServer } from "chemicaljs";
import express from "express";

const chemical = new ChemicalServer();
const port = process.env.PORT || 8080;

chemical.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

chemical.listen(port, () => {
    console.log(`Proxywave styled listening on port ${port}`);
});