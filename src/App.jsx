import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Corri" breed="GSP" animal="dog" />
      <Pet name="Pomi" breed="median hair" animal="cat" />
      <Pet name="Java" breed="Isa" animal="chicken" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); //was in previous versions reactDom.render(container, </App>);
root.render(<App />); //jsx will do the React.createElement
