import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Fouter from "./pages/Fouter";
import Home from "./pages/Home";
 
export default function App() {

  return (
    <div>
      <Header />
       <Outlet />
       <Fouter />
    </div>
  );
}
