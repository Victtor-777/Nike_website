import { ServiceCard } from "../Components/ServiceCard";
import { services } from "../constants";

export function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
}
