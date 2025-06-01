import { createContext, useState, type ReactNode } from "react";

interface ContextType {
  index: number;
  setIndex: (v: number) => void;
  openSidebar: boolean;
  setOpenSidebar: (v: boolean) => void;
  activityIndex: number;
  setActivityIndex: (v: number) => void;
}

const initialiser: ContextType = {
  index: 0,
  setIndex: (v: number) => v,
  openSidebar: false,
  setOpenSidebar: (v) => v,
  activityIndex: 0,
  setActivityIndex: (v: number) => v,
};

export const GeneralContext = createContext(initialiser);

const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleActivityIndex = (v: number) => {
    setActivityIndex(v);
  };

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
        activityIndex,
        setActivityIndex: handleActivityIndex
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
