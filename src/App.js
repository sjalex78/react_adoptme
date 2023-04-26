const Pet = () => {
    return React.createElement("div", {},[
        React.createElement("h1", {}, "Corri"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "GSP")
    ]);
};

const App = () => {
    return React.createElement (
        "div", // it will render this
        {}, //attributes style tag, class name needs to be an empty object of null
        [
            React.createElement ("h1", {} , "Adopt Me!"), //children
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); //was in previous versions reactDom.render(container, </App>);
root.render(React.createElement(App)); //jsx will do the React.createElement
