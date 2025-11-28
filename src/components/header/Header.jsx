import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-green-light fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-5">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-black">
          Doctor<span className="text-primary">Care</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`text-base font-semibold transition ${
                  active === item.id
                    ? "text-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call to action btn */}
        <a
          href="#contact"
          className="hidden md:block border text-primary border-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
        >
          Schedule Appointment
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-green-light w-full p-6 flex flex-col gap-6 text-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                }}
                className={`text-lg font-semibold transition ${
                  active === item.id
                    ? "text-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;