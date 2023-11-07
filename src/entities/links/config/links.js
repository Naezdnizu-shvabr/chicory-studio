import { TbHomeSearch, TbListSearch } from "react-icons/tb";
import { PiBookmarks } from "react-icons/pi";

export const links = [
    { name: "Home", img: <TbHomeSearch />, to: "/" },
    { name: "Catalog", img: <TbListSearch />, to: "/1" },
    { name: "Saved", img: <PiBookmarks />, to: "/2" },
];
