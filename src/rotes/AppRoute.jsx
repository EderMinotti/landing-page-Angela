import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Path } from "./PathRotes";
import { Home } from "../Pages/Home";
import { LayoutBase } from "../layout/LayoutBase";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutBase />}>
            <Route path={`${Path.home}`} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
