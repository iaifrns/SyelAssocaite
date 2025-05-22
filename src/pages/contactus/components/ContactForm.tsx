import CustomInput from "@/components/CustomInput";
import { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: {
      placeholder: "Nom complet",
      value: "",
    },
    email: {
      placeholder: "E-mail",
      value: "",
    },
    subject: {
      placeholder: "Objet",
      value: "",
    },
    message: {
      placeholder: "Message",
      value: "",
    },
  });

  return (
    <div className="py-16 w-full flex items-center justify-center flex-col gap-8 max-w-[700px]">
      <div className="flex flex-col gap-4 items-center">
        <p className="font-playfair font-bold text-3xl">Contactez-nous</p>
        <p className="font-poppins text-gray-400 text-center">Remplissez ce formulaire, notre équipe vous répondra au plus vite</p>
      </div>
      <div className="flex flex-col w-full gap-4">
        <CustomInput
          placeholder={contact.name.placeholder}
          value={contact.name.value}
          onChange={(e) =>
            setContact({
              ...contact,
              name: { ...contact.name, value: e.target.value },
            })
          }
        />
        <CustomInput
          placeholder={contact.email.placeholder}
          value={contact.email.value}
          onChange={(e) =>
            setContact({
              ...contact,
              email: { ...contact.email, value: e.target.value },
            })
          }
        />
        <CustomInput
          placeholder={contact.subject.placeholder}
          value={contact.subject.value}
          onChange={(e) =>
            setContact({
              ...contact,
              subject: { ...contact.subject, value: e.target.value },
            })
          }
        />
        <textarea
          name=""
          id=""
          placeholder={contact.message.placeholder}
          className="w-full h-[180px] bg-[rgba(240,240,240)] font-poppins p-4 focus:outline-none"
          value={contact.message.value}
          onChange={(e) =>
            setContact({
              ...contact,
              message: { ...contact.message, value: e.target.value },
            })
          }
        />
        <button className="w-full p-4 bg-primary text-white font-bold font-poppins">
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
