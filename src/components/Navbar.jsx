
import { useState } from "react";
import { ShoppingBag, Menu, X, ShoppingCart } from "lucide-react";

const Navbar = ({ myList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = myList.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Cart", href: "#cart" },
  ];

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="max-w-main mx-auto flex h-20 items-center justify-between px-4">
        <a
          href="#home"
          onClick={handleNavigation}
          className="flex items-center gap-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <ShoppingBag size={24} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Shop<span className="text-blue-600">Zone</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cart"
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="max-w-main mx-auto flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavigation}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}

                {link.name === "Cart" && (
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-600">
                    {totalItems}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
