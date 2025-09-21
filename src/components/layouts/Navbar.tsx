import { Link } from "@tanstack/react-router";
import sprattUrl from "@/assets/images/spratt.jpg";
import { Youtube, Instagram, Twitch } from "../icons";

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
  return (
    <nav className="flex items-center justify-between gap-4 py-6">
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
      <div className="flex items-center gap-4">
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
      <div className="flex items-center gap-4"></div>
    </nav>
  );
};

export default Navbar;
