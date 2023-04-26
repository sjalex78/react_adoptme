const Pet = (props) => {
    return React.createElement("div", {},[
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

const App = () => {
    return React.createElement (
        "div", // it will render this
        {}, //attributes style tag, class name needs to be an empty object of null
        [
            React.createElement ("h1", {} , "Adopt Me!"), //children
            React.createElement(Pet, {name: "Corri", animal: "Dog", breed: "GSP"}),
            React.createElement(Pet, {name: "Pomi", animal: "Cat", breed: "median hair"}),
            React.createElement(Pet, {name: "Java", animal: "Chicken", breed: "Isa"})
        ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); //was in previous versions reactDom.render(container, </App>);
root.render(React.createElement(App)); //jsx will do the React.createElement
