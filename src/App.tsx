import { CustomerReviews } from "./Components/CustomerReviews";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { PopularProducts } from "./Components/PopularProducts";
import { Services } from "./Components/Services";
import { SpecialOffer } from "./Components/SpecialOffer";
import { Subscribe } from "./Components/Subscribe";
import { SuperQuality } from "./Components/SuperQuality";

export default function App() {
  return (
    <main className="relative">
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">
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
