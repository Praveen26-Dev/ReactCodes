import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // 🔥 mt-20 REMOVED
    <footer className="text-gray-300">

      {/* ===== BACK TO TOP ===== */}
      <div
        onClick={scrollToTop}
        className="bg-gray-700/80 hover:bg-gray-600/80
        text-center py-3 cursor-pointer text-sm font-medium"
      >
        Back to top
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 py-16
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">

          <FooterColumn
            title="Get to Know Us"
            links={[
              "About Nextronix",
              "Careers",
              "Press Releases",
              "Tech Blog",
            ]}
          />

          <FooterColumn
            title="Connect with Us"
            links={[
              "Facebook",
              "Twitter",
              "Instagram",
              "LinkedIn",
            ]}
          />

          <FooterColumn
            title="Make Money with Us"
            links={[
              "Sell on Nextronix",
              "Become an Affiliate",
              "Advertise Your Products",
              "Vendor Login",
            ]}
          />

          <FooterColumn
            title="Let Us Help You"
            links={[
              "Your Account",
              "Returns Centre",
              "Order Tracking",
              "Help & Support",
            ]}
          />
        </div>

        {/* ===== LOGO + LANGUAGE ===== */}
        <div className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6
            flex flex-col md:flex-row items-center justify-center gap-6">

            <h2 className="text-xl font-extrabold tracking-wide
              bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500
              bg-clip-text text-transparent">
              Nextronix
            </h2>

            <div className="flex gap-3 text-sm">
              <span className="border border-white/20 px-3 py-1 rounded">
                🌐 English
              </span>
              <span className="border border-white/20 px-3 py-1 rounded">
                🇮🇳 India
              </span>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM LINKS ===== */}
        <div className="bg-black border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-xs">

            <MiniColumn title="Nextronix Web Services" desc="Cloud Computing Services" />
            <MiniColumn title="Nextronix Business" desc="Solutions for Enterprises" />
            <MiniColumn title="Prime Electronics" desc="Exclusive Deals & Offers" />
            <MiniColumn title="Music & Audio" desc="Stream & Download" />
            <MiniColumn title="Movies & TV" desc="Entertainment Hub" />
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="bg-black py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nextronix.com • All rights reserved
        </div>
      </div>
    </footer>
  );
};

/* ===== FOOTER COLUMN ===== */
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link} className="hover:underline cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

/* ===== MINI COLUMN ===== */
const MiniColumn = ({ title, desc }) => (
  <div>
    <p className="text-white font-medium">{title}</p>
    <p className="text-gray-400 mt-1">{desc}</p>
  </div>
);

export default Footer;
