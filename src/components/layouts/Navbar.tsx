import { Link } from "@tanstack/react-router";
import sprattUrl from "@/assets/images/spratt.jpg";
import {
  Youtube,
  Instagram,
  Twitch,
  Menu,
  Home,
  HandCoins,
  Shirt,
} from "../icons";
import { useState } from "react";

interface Social {
  brand: string;
  icon: React.ReactNode;
  url: string;
  label?: string;
}

const socialsMap: Social[] = [
  {
    brand: "Twitch",
    icon: <Twitch />,
    url: "https://www.twitch.tv/thelittlemoonling",
    label: "Come hang out with me on Twitch",
  },
  {
    brand: "Instagram",
    icon: <Instagram />,
    url: "https://instagram.com/thelittlemoonling",
    label: "Follow me on Instagram",
  },
  {
    brand: "Youtube",
    icon: <Youtube />,
    url: "https://youtube.com/thelittlemoonling",
    label: "Subscribe to my YouTube channel",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-start justify-between gap-4">
      {/* user info */}
      <div>
        {/* avatar */}
        <div className="flex items-center gap-4">
          <div className="size-8 overflow-hidden rounded-full">
            <img
              className="size-full object-cover object-center transition-transform hover:scale-105"
              src={sprattUrl}
              alt="user image"
            />
          </div>
          <span className="text-xl font-bold">The Little Spratt</span>
        </div>
        {/* social medias */}
        <div className="mt-2 flex items-center justify-end gap-4">
          {socialsMap.map((social) => (
            <a
              key={social.brand}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-1 transition-opacity hover:opacity-80"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* route links */}
      <div className="hidden items-center gap-4 md:flex">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/money-love" className="navlink">
          Money Love
        </Link>
        <Link to="/merch" className="navlink">
          Merch
        </Link>
      </div>

      {/* menu */}
      <div className="flex items-center gap-4">
        <div className="relative block md:hidden">
          <button
            className="btn btn-ghost p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
          {menuOpen && (
            <ul className="menu bg-base-200 rounded-box absolute top-full right-0 w-56">
              <li>
                <Link to="/" className="flex items-center gap-4 font-bold">
                  <Home className="size-5" size={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/merch" className="flex items-center gap-4 font-bold">
                  <HandCoins className="size-5" size={20} />
                  Money Love
                </Link>
              </li>
              <li>
                <Link
                  to="/money-love"
                  className="flex items-center gap-4 font-bold"
                >
                  <Shirt className="size-5" size={20} />
                  Merch
                </Link>
              </li>
            </ul>
          )}
        </div>
        <button className="btn btn-ghost p-2">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
