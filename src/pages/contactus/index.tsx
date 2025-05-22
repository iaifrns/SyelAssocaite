import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "../home/components/TopBar";
import TopMenuBar from "@/components/TopMenuBar";
import { Menu } from "@/enum/Menu";
import { generalInfo } from "@/constants/informations";
import Footer from "../home/components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactForm from "./components/ContactForm";

const ContactDetail = ({
  icon,
  title,
  desc,
  info,
}: {
  icon: string;
  title: string;
  desc: string;
  info: string;
}) => {
  return (
    <div className="flex flex-col md:gap-4 gap-2 text-white">
        <Icon icon={icon} className="md:text-[40px] text-2xl" />
      <p className="md:text-3xl text-xl font-bold font-playfair">{title}</p>
      <p className="max-md:text-sm">{desc}</p>
      <p className="font-poppins font-semibold text-secondary max-md:text-sm">{info}</p>
    </div>
  );
};

const companyDetail: {
  icon: string;
  title: string;
  desc: string;
  info: string;
}[] = [
  {
    icon: "mdi:phone",
    title: "Téléphone",
    desc: "Appelez-nous pour toute question ou demande d’information.",
    info: generalInfo.phone,
  },
  {
    icon: "clarity:email-solid",
    title: "E-mail",
    desc: "Envoyez-nous vos messages, nous répondons rapidement",
    info: generalInfo.email,
  },
  {
    icon: "subway:location-1",
    title: "Localisation",
    desc: generalInfo.location,
    info: "View On Google Map",
  },
];

const ContactUsPage = () => {
  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <TopMenuBar
          active={Menu.CONTACTUS}
          sub=" Envoyez-nous un message rapide"
          title="Contactez Nous"
        />
        <div className="w-full bg-gray-800 md:p-16 max-md:py-8 flex justify-center items-center">
          <div className="component-container gap-4 max-md:gap-8 max-md:flex-col">
            {companyDetail.map((detail, ind) => (
              <ContactDetail
                desc={detail.desc}
                icon={detail.icon}
                info={detail.info}
                title={detail.title}
                key={detail.info + ind}
              />
            ))}
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default ContactUsPage;
