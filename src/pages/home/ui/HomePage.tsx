import { Header } from "../../../widgets/header";
import { Hero } from "../../../widgets/hero";
import { Advantages } from "../../../widgets/advantages";
import { Catalog } from "../../../widgets/catalog";
import { Collections } from "../../../widgets/collections";
import { Plans } from "../../../widgets/plans";
import { Discounts } from "../../../widgets/discounts";
import { Footer } from "../../../widgets/footer";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Catalog />
        <Collections />
        <div className={styles.offers}>
          <Plans />
          <Discounts />
        </div>
      </main>
      <Footer />
    </>
  );
}
