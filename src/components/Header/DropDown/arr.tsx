import { CiStar, CiLogout, CiUser } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const arr = [
  { logo: <CiUser />, title: "Manage My Account", link: "/profile" },
  { logo: <RiShoppingBasket2Line />, title: "My Order", link: "/" },
  { logo: <AiOutlineCloseCircle />, title: "My Cancellations", link: "/" },
  { logo: <CiStar />, title: "My Reviews", link: "/" },
  { logo: <CiLogout />, title: "Logout", link: "/" },
];
