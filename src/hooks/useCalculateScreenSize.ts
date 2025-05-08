import { useEffect, useState } from "react";

export const useCalculateScreenSize = () => {
  const [sizeY, setSizeY] = useState(0);

  useEffect(() => {
    const handleResizeScreen = () => {
        let s = window.innerHeight;
        let n = window.innerWidth;
      if (n < 770) {
        setSizeY(500);
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
