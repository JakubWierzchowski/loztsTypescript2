import styled from "./contact.module.scss";
import Image from "next/image";

export default async function Contact() {
  return (
    <section className={styled.animation}>
      <div className={styled.imageWraper}>
        <Image
          src="/images/header/logo.png"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className={styled.contentSection}>
        <ul className={styled.list}>
          <li className={styled.firstItem}>
            LUBELSKI OKRĘGOWY ZWIĄZEK TENISA STOŁOWEGO W LUBLINIE
          </li>
          <li className={styled.liItems}>
            21-300 Radzyń Podlaski, ul. Wyszyńskiego 8/3
          </li>
          <li className={styled.liItems}>tel. 503 120 539</li>
          <li className={styled.liItems}>e-mail: lozts.poczta@onet.pl</li>
        </ul>
        <ul className={styled.list}>
          <li className={styled.bankAcc}>Numer konta:</li>
          <li className={styled.bankAcc}>
            Bank Spółdzielczy w Radzyniu Podlaskim
          </li>
          <li className={styled.bankAcc}>
            Nr 43 8046 0002 2001 0003 0542 0001
          </li>
        </ul>
        <ul className={styled.list}>
          <li className={styled.firstItem}>
            Prezes Związku: Dariusz Wierzchowski
          </li>
          <li className={styled.liItems}>tel. kom. 503 120 539</li>
          <li className={styled.liItems}>e-mail: lozts.poczta@onet.pl</li>
        </ul>
        <ul className={styled.list}>
          <li className={styled.firstItem}>Adres do Korespondencji:</li>
          <li className={styled.liItems}>
            21-300 Radzyń Podlaski, ul. Wyszyńskiego 8/3
          </li>
        </ul>
      </div>
    </section>
  );
}
