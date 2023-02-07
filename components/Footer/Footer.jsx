import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 lg:px-28 text-white">
      <div>
        <div className="flex items-center space-x-2">
          <img src="assets/logo.png" className="w-16 h-16" alt="" />
          <p className="text-xl font-semibold">Earthly</p>
        </div>

        <p>Providing Eco-Friendly Products since 2020</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
