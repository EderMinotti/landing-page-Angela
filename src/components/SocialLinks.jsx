import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const SocialLinks = () => {
  return (
    <>
      <div className="text-6xl fixed bottom-3 right-3 text-[#32D851]  ">
        <IoLogoWhatsapp />
      </div>
      <div className="text-6xl fixed bottom-20 right-3 text-black  ">
        <RiInstagramFill />
      </div>
    </>
  );
};
