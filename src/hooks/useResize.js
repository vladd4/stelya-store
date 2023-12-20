import { useEffect } from "react";

const useResize = (setSlides) => {
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (setSlides !== null) {
        if (windowWidth <= 450) {
          setSlides(2);
        } else if (windowWidth <= 650) {
          setSlides(3);
        } else if (windowWidth <= 900) {
          setSlides(4);
        } else {
          setSlides(5);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
export default useResize;
