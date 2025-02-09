import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
