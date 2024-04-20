import { Nav } from "./Components/Nav";
import { CustomerReviews } from "./Sections/CustomerReviews";
import { Footer } from "./Sections/Footer";
import { Hero } from "./Sections/Hero";
import { PopularProducts } from "./Sections/PopularProducts";
import { Services } from "./Sections/Services";
import { SpecialOffer } from "./Sections/SpecialOffer";
import { Subscribe } from "./Sections/Subscribe";
import { SuperQuality } from "./Sections/SuperQuality";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
