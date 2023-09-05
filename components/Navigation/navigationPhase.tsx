"use client";
import classes from "./navigationPhase.module.scss";
import Navbar from "./navBar";
import Slider from "./Slider/slider";
import { usePathname } from "next/navigation";

export default function NavigationPhase() {
  const pathName = usePathname();

  return (
    <>
      <header
        className={pathName === "/" ? classes.mainHeader : classes.mainHeader2}
      >
        <Navbar pathname={pathName} />
        {pathName === "/" ? <Slider /> : null}
      </header>
    </>
  );
}

// export default NavigationPhase;
