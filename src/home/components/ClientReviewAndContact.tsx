import { images } from "@/constants/images";
import ClientTestimony from "./ClientTestimony";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import CustomInput from "@/components/CustomInput";

const ClientReviewAndContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    lawType: "",
    message: "",
  });
  return (
    <div className="w-full h-full relative">
      <ClientTestimony />
      <div className="w-full h-[600px] max-md:hidden overflow-hidden relative z-0">
        <Parallax speed={-30}>
          <img
            src={images.lawImg.LAW5}
            alt={images.lawImg.LAW5}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>
      <div className="md:absolute w-full md:h-full md:z-10 md:top-0 flex flex-col md:justify-end items-center">
        <div className="md:mb-[150px] bg-white py-8 md:px-8 md:py-16 md:w-[55%] w-[90%] flex flex-col gap-8 rounded-md items-center">
          <p className="text-[32px] font-playfair font-bold">
            Free Consultation
          </p>
          <p className="text-gray-400 font-poppins text-center text-lg md:w-[70%] max-md:text-sm">
            Law is complicate matter. It can cause you a big problem if you
            ignore it. Let us help you!
          </p>
          <div className="flex max-md:flex-col w-full justify-between gap-8">
            <CustomInput
              placeholder="Nom"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <CustomInput
              placeholder="Numero"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex max-md:flex-col w-full justify-between gap-8">
            <CustomInput
              placeholder="Law"
              value={formData.lawType}
              onChange={(e) =>
                setFormData({ ...formData, lawType: e.target.value })
              }
            />
            <CustomInput
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <textarea
              name=""
              id=""
              placeholder={'Message'}
              className="w-full h-[180px] bg-[rgba(230,230,230)] font-poppins p-4 focus:outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          <button className="w-full p-4 bg-primary text-white font-bold font-poppins">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewAndContact;
