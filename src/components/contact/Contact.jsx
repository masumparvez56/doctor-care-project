import React from 'react';
import contactImg from '../../assets/contact.png';

const Contact = () => {
  return (
    <section id="contact" className="md:py-28 py-12 bg-white">
      <div className="py-12 max-w-7xl container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 contact-content">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Left Side: Contact Information */}
        <div className="w-full md:w-1/2 contact-content">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>

          <p className="text-lg text-gray-600 mb-2 flex items-center">
            <i className="ri-map-pin-line text-primary mr-2"></i>
            Address: Gazipur, Dhaka, 121
          </p>

          <p className="text-lg text-gray-600 mb-8 flex items-center">
            <i className="ri-mail-line text-primary mr-2"></i>
            Email:
            <a
              href="mailto:parvezmasum581@gmail.com"
              className="pl-2 hover:underline"
            >
              doctorcare01@gmail.com
            </a>
          </p>

          <a
            href="#"
            className="bg-primary md:w-64 text-white hover:bg-transparent border hover:border-primary px-6 py-2.5 rounded-full hover:text-primary transition flex items-center justify-center"
          >
            <i className="ri-whatsapp-line mr-2"></i>
            Contact Us
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;