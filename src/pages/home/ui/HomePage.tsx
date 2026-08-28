import { Header } from "../../../widgets/header";
import { Hero } from "../../../widgets/hero";
import { Advantages } from "../../../widgets/advantages";
import { Catalog } from "../../../widgets/catalog";
import { Collections } from "../../../widgets/collections";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <Collections />
      </main>
    </>
  );
}
