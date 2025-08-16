import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <nav className="bg-white text-gray-900 h-[100px] flex items-center justify-between px-6 md:px-[120px] shadow-sm">
      <h2 className="text-h2 text-primaryColor">ASSETra</h2>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-10 text-nav">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryColor"
                  : "text-customGray hover:text-primaryColor"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 px-10 w-full bg-white md:hidden z-10 shadow-lg border-t-2" >
          <ul className="flex flex-col text-left text-nav">
            {navItems.map((item, idx) => (
              <li key={item.name} className="border-b last:border-none">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-4 ${
                      isActive
                        ? "text-primaryColor"
                        : "text-customGray hover:text-primaryColor"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
