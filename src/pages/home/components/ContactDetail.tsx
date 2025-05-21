import React from "react";
import { images } from "../../../constants/images";
import { generalInfo } from "../../../constants/informations";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactDetail = () => {
  return (
    <div
      className="2xl:w-[80%] md:w-[90%] w-full flex bg-cover max-w-[1224px]"
      style={{ backgroundImage: `url(${images.lawImg.LAW1})` }}
    >
      <div className="w-full h-full flex justify-center items-center md:p-8 p-3 blur-bg">
        <div className="border flex items-center justify-center p-12 flex-col w-full gap-8">
          <div className="flex flex-col gap-4 items-center">
            <p className="md:text-2xl text-xl max-md:text-center font-semibold font-poppins text-white">
              Vous Cherchez Quelqu’un Pour Vous Accompagner ?
            </p>
            <p className="md:text-3xl text-3xl max-md:text-center font-playfair font-semibold text-main-text">
              Laissez-nous vous aider ! Appelez dès maintenant :{" "}
              {generalInfo.phone}
            </p>
          </div>
          <div className="flex w-fit gap-4 max-md:flex-col">
            <div className="flex gap-2 items-center">
              <Icon icon="tabler:mail-filled" className="text-main-text" />
              <p className="text-white">{generalInfo.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="svg-spinners:clock" className="text-main-text" />
              <p className="text-white">{generalInfo.openings}</p>
            </div>
          </div>
          <div className="rounded-md w-1 h-[60px] bg-main-text"></div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-white font-bold font-poppins text-xl md:text-2xl">
            S’abonner à la NewsLetter
            </p>
            <div className="flex max-md:w-full max-md:flex-col max-md:gap-2">
              <input
                type="text"
                placeholder="Votre adresse email"
                className="p-4 text-white bg-[rgb(43,43,43)] focus:outline-none md:w-[350px]"
              />
              <button className="py-4 px-8 font-bold font-poppins bg-main-text text-white">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
