import ReactDOM from "react-dom/client";
import "./index.css";
import UsersTestControl from "./components/UsersTestControl";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react-19</div>
    <UsersTestControl />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));