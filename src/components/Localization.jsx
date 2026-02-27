import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

export const Localization = () => {
  return (
    <section className=" bg-transparent flex flex-col m-5">
        <h2 className="text-(--cor-verde) text-2xl ml-3 font-bold">Localização:</h2>
      <figure className="m-5">
        <img className="border rounded-xl" src="./localizacao.png" alt="" />
      </figure>
      <ul className="flex flex-col gap-3">
        <li className="flex ml-1 justify-start items-center text-base gap-x-1">
          <FaLocationDot />
          R. Angelino Gardini, 90 - Matão, SP, 15995-298
        </li>
        <li className="flex ml-1 items-center text-base gap-x-1">
          <BsTelephoneFill />
          (55) 16-99317-4694
        </li>
        <li></li>
      </ul>
    </section>
  );
};
