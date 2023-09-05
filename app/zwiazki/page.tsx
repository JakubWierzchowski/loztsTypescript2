import Link from "next/link";
import associations from "../../data/associations.json";
import styles from "./associations.module.scss";
import { Association } from "@/types/association.type";

export default async function Associations() {
  const data: Association[] = associations.associations;
  return (
    <>
      <h1 className={styles.title}>Wojewódzkie związki</h1>
      <section className={styles.sectionWrapper}>
        {data.map((details, index) => (
          <Link
            key={details.title}
            className={styles.associationsLink}
            href={details.link}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.associationName}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {details.title}
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
