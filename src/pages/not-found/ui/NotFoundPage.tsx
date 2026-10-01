import { Link } from "react-router";
import clsx from "clsx";
import { ROUTES } from "@/shared/lib";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className={clsx("container", styles.main)}>
        <h1 className={styles.title}>Страница не найдена</h1>
        <Link to={ROUTES.HOME} className={styles.link}>
          На главную
        </Link>
      </main>
      <Footer />
    </>
  );
}
