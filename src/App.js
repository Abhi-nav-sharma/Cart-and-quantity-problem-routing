import Routes from "./AllRoutes/routes";
import NavBar from "./Components/NavBar";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}
