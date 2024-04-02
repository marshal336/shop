import { PATH } from "~/enum/paths";


export const List = [
  {
    title: "Support",
    list: [
      {
        item: `111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.`,
        link: "/",
      },
      { item: "exclusive@gmail.com", link: "/" },
      { item: "+88015-88888-9999", link: "/" },
    ],
  },
  {
    title: "Account",
    list: [
      { item: "My Account", link: "/profile" },
      { item: "Login / Register", link: PATH.AUTH_SIGN_UP },
      { item: "Cart", link: "/cart" },
      { item: "Wishlist", link: "/wishlist" },
      { item: "Shop", link: "/shop" },
    ],
  },
  {
    title: "Quick Link",
    list: [
      { item: "Privacy Policy", link: "/" },
      { item: "Terms Of Use", link: "/" },
      { item: "FAQ", link: "/" },
      { item: "Contact", link: "/" },
    ],
  },
];
