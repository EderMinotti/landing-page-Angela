import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Path } from "./PathRotes";
import { Home } from "../Pages/Home";
import { LayoutBase } from "../layout/LayoutBase";
import { About } from "../Pages/About";
import { Contact } from "../components/Contact";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutBase />}>
            <Route path={`${Path.home}`} element={<Home />} />
            <Route path={`${Path.about}`} element={<About />} />
            <Route path={`${Path.contact}`} element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
