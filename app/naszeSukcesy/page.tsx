import React from "react";
import Successes from "../../data/ourSuccesses.json";
import OurSuccess from "@/components/OurSuccesses/ourSuccesses";
import { SuccessDetails } from "@/types/ourSuccesses.type";
import styles from "../../components/OurSuccesses/ourSuccesses.module.scss";

export default async function OurSuccesses() {
  const data: SuccessDetails[] = Successes.successes;
  return (
    <>
      <h1 className={styles.title}>Nasze sukcesy</h1>
      <section className={styles.detailsSection}>
        {data.map((details, index) => (
          <OurSuccess details={details} key={details.date} index={index} />
        ))}
      </section>
    </>
  );
}
