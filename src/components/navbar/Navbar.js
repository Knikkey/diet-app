import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/basics", label: "Weight Loss 101" },
  { to: "/bmr", label: "BMR Calculator" },
  { to: "/tdee", label: "TDEE Calculator" },
  { to: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
