import { useEffect, useState } from "react";

export const useCalculateScreenSize = () => {
  const [sizeY, setSizeY] = useState<number|null>(0);

  useEffect(() => {
    const handleResizeScreen = () => {
        let s = window.innerHeight;
        let n = window.innerWidth;
        console.log(n)
      if (n < 770) {
        setSizeY(null);
      } else if(n<1030) {
        setSizeY(1100)
      } else {
        if (s < 750) {
          setSizeY(window.innerHeight + 320);
        } else {
          setSizeY(window.innerHeight + 250);
        }
      }
    };

    handleResizeScreen()

    window.addEventListener("resize", handleResizeScreen);

    return () => window.removeEventListener("resize", handleResizeScreen);
  }, []);

  return { sizeY };
};
