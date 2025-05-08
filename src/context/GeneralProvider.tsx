import { createContext, useState, type ReactNode } from "react";

interface ContextType {
  index: number;
  setIndex: (v: number) => void;
  openSidebar: boolean;
  setOpenSidebar: (v: boolean) => void;
}

const initialiser: ContextType = {
  index: 0,
  setIndex: (v: number) => v,
  openSidebar: false,
  setOpenSidebar: (v) => v,
};

export const GeneralContext = createContext(initialiser);

const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleIndex = (v: number) => {
    setIndex(v);
  };

  const handleOpenSidebar = (v: boolean) => {
    setOpenSidebar(v);
  };

  return (
    <GeneralContext.Provider
      value={{
        index,
        setIndex: handleIndex,
        openSidebar,
        setOpenSidebar: handleOpenSidebar,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
