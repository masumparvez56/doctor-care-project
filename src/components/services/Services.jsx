import { services } from "../../../src/data/services";
import serviceIcon from '../../assets/service-icon.png'

const Services = () => {
  return (
    <section id="services" className="md:py-24 py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-lg mb-3">SERVICES</p>

        <h2 className="text-3xl md:text-5xl font-bold sm:w-1/2 mx-auto mb-10">
          How can we help you feel better?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow p-6 rounded-lg text-left transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img src={serviceIcon} alt="" className="mb-4" />
              <h3 className="font-bold text-lg mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;