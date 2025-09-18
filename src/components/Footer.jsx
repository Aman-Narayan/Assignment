import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-full">⬩</div>
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
              <h1>F</h1>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <h1>T</h1>
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
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Information</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Service</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Information</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">My Account</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Information</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Our Offers</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Information</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
