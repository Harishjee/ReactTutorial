import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child", key: "1" }, [React.createElement("h1", {}, "shdushishi busubsud nfnfd"), React.createElement("h2", {}, "I am the H2")]), React.createElement("div", { id: "child2", key: "2" }, [React.createElement("h1", {}, "I am the H1"), React.createElement("h2", {}, "I am the H2")])]);

// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);