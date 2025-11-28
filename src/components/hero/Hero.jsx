import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="bg-green-light pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-sm font-bold text-primary uppercase mb-3 flex items-center gap-1">
            WELCOME TO DOCTORCARE 👋
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#212529] leading-tight mb-6">
            Simplified medical <br /> care for everyone
          </h1>

          <p className="text-lg md:text-xl text-[#495057] mb-8">
            The doctors at DoctorCare go beyond symptoms to treat the root cause
            of your illness and provide long-term healing.
          </p>

          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-brand-green-hover inline-flex items-center gap-2 transition"
          >
            <i className="ri-whatsapp-line"></i>
            Book Your Appointment
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={heroImg} alt="Hero" className="w-full max-w-md object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;