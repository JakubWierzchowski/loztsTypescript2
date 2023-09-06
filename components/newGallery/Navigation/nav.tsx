import { NavigationProps } from "../../../types/newGallery";

import style from "./nav.module.scss";

export const Navigation: React.FC<NavigationProps> = ({
  className,
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className={`${style.navigation} ${className}`}>
      <button
        disabled={disabledPrev}
        className={`${style.navigationBtn}  ${style.navigationBtnLeft}`}
        onClick={onPrevClick}
      >
        Previous
      </button>
      <button
        disabled={disabledNext}
        className={`${style.navigationBtn} ${style.navigationBtnRight}`}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
};
