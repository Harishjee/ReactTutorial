// const heading = React.createElement("h1",
// {id: "heading", className: "abc" }, 
// "Hiii");
// console.log(heading);
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child", key: "1" }, [React.createElement("h1", {}, "I am the H1"), React.createElement("h2", {}, "I am the H2")]), React.createElement("div", { id: "child2", key: "2" }, [React.createElement("h1", {}, "I am the H1"), React.createElement("h2", {}, "I am the H2")])]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);