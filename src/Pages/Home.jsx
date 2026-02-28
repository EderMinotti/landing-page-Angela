import { AboutMe } from "../components/AboutMe";
import { Localization } from "../components/Location";
import { Results } from "../components/Results";

export const Home = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <picture className="min-w-full flex justify-center">
        <img src="./teste.png" alt="" />
      </picture>
      <Results />
      <Localization />
    </div>
  );
};
