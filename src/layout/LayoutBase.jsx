import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SocialLinks } from "../components/SocialLinks";
import { Footer } from "../components/Footer";

export const LayoutBase = () => {
  return (
    <section className="min-h-full flex flex-col">
      <NavBar />
      <Outlet />
      <SocialLinks />
      <Footer />
    </section>
  );
};
