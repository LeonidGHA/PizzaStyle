import LogoImg from "../../shared/images/Logo.png";

import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={css.logo_wrapper}>
      <img src={LogoImg} alt="Logo Pizza" width="40" height="40" />
    </div>
  );
};

export default Logo;
