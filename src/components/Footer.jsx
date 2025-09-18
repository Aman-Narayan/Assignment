import React from "react";
import { LogoURL } from "../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-700 py-12 px-6 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-2">
            <img className="h-15" src={LogoURL} alt="Logo" />
            <h2 className="text-xl font-bold">E-Comm</h2>
          </div>
          <p className="text-sm mt-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <p className="text-sm mb-4">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <img
                className="h-5"
                src="https://static.vecteezy.com/system/resources/previews/021/495/985/large_2x/facebook-social-media-logo-icon-free-png.png"
                alt="Logo"
              />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <img
                className="h-5"
                src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
                alt="Logo"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm leading-6">
            E-Comm, 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
        <div>
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Service</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">My Account</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Our Offers</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
            className="h-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
