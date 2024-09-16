import AnnoucementBar from "./components/annoucement-bar";
import Header from "./components/header";
import HeroImage from "./components/hero-image";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AnnoucementBar />
      <Header />
      <HeroImage />

      <Outlet />
    </>
  );
};

export default Layout;
