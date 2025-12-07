import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a6071] text-gray-200 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2">
            {/* <Image
              src="/logo.png"
              alt="EstateAgent Logo"
              width={40}
              height={40}
              className="rounded"
            /> */}
            <span className="text-xl font-semibold text-white">EstateAgent</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Bangladesh&apos;s leading real estate platform connecting buyers, sellers,
            and renters. We offer verified properties, expert guidance, and seamless
            transactions across all major cities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/buy" className="hover:text-white hover:border-b hover:border-cyan-300 ">Buy Properties</a></li>
            <li><a href="/rent" className="hover:text-white hover:border-b hover:border-cyan-300 ">Rent Properties</a></li>
            <li><a href="/sell" className="hover:text-white hover:border-b hover:border-cyan-300 ">Sell Properties</a></li>
            <li><a href="/property-types" className="hover:text-white hover:border-b hover:border-cyan-300 ">Property Types</a></li>
            <li><a href="/about" className="hover:text-white hover:border-b hover:border-cyan-300 ">About Us</a></li>
          </ul>
        </div>

        {/* Property Types */}
        <div>
          <h4 className="text-white font-semibold mb-4">Property Types</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/apartments" className="hover:text-white hover:border-b hover:border-cyan-300 ">Apartments</a></li>
            <li><a href="/villas" className="hover:text-white hover:border-b hover:border-cyan-300 ">Villas</a></li>
            <li><a href="/commercial" className="hover:text-white hover:border-b hover:border-cyan-300 ">Commercial</a></li>
            <li><a href="/land" className="hover:text-white hover:border-b hover:border-cyan-300 ">Land</a></li>
            <li><a href="/office-space" className="hover:text-white hover:border-b hover:border-cyan-300 ">Office Space</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Gulshan Avenue, Dhaka 1212, Bangladesh</p>
          <p className="mt-2 text-sm">+880 1700-000000</p>
          <p className="mt-2 text-sm">info@estateagent.com</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-amber-200">
              <Facebook fontSize="medium" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-amber-200">
              <Instagram fontSize="medium" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-amber-200">
              <YouTube fontSize="medium" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-amber-200">
              <LinkedIn fontSize="medium" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} EstateAgent. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-white hover:border-b hover:border-cyan-300 ">Privacy Policy</a>
          <a href="/terms" className="hover:text-white hover:border-b hover:border-cyan-300 ">Terms of Service</a>
          <a href="/cookies" className="hover:text-white hover:border-b hover:border-cyan-300 ">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
