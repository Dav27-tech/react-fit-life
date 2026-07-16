import { services } from "../data/services.js";
import ServiceCard from "./ServiceCard.jsx";

export default function Service() {
  return (
    <section className="py-5" id="services">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Our Programs</h2>
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
