import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Page/Home/Home";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import FooterCompo from "./Components/Footer/FooterCompo";
import CTA from "./Components/CTA/CTA";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <NavBar />
      {router}
      <FooterCompo />
      <CTA />
    </>
  );
}

export default App;
