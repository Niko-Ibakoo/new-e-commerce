import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // collection of all endpoint in the adress
//uselocation
export default function ScroolToTop() {
  const {pathname} = useLocation(); //destructuring the whole page to get only the pathname
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

}
