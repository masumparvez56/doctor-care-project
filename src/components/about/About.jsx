import React from 'react';
import aboutImg from '../../assets/about.png'

const About = () => {
  return (
    <section id="about" className="md:py-32 py-20 bg-brand-beige">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        <img src={aboutImg} className="w-full md:w-1/2 rounded-lg" />

        <div className="md:w-1/2">
          <h3 className="text-primary font-semibold text-lg mb-2">ABOUT US</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Understand who we are and why we exist
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At DoctorCare, we believe healthcare should be simple, effective, and accessible for everyone. 
            Our team of dedicated doctors goes beyond treating symptoms, focusing on understanding the root 
            causes of illnesses to provide long-term solutions. With years of experience, compassionate care, 
            and a patient-first approach, we strive to improve the health and well-being of our community every day.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;