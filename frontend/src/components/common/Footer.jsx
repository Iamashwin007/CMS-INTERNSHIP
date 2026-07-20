import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              MediCare
            </h2>

            <p className="text-gray-300 mt-4">
              Delivering quality healthcare with compassion and trusted
              medical professionals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Home</li>
              <li>Doctors</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+977 9800000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@medicare.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Itahari, Nepal</span>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-300">
              Facebook | Instagram | LinkedIn
            </p>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 MediCare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;