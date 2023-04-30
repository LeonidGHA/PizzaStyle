import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HtmlMainMarkup from "../../Helpers/HtmlMarkup/HtmlMainMarkup";

import NotFoundImg from "../../shared/images/404.png";

import css from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [navigate]);
  return (
    <HtmlMainMarkup>
      <section className={css.section_wrapper}>
        <div className={css.img_wrapper}>
          <img
            src={NotFoundImg}
            alt="Not Found Page"
            width={400}
            height={400}
          />
        </div>

        <p>after 3 seconds you will be directed to the Home Page</p>
      </section>
    </HtmlMainMarkup>
  );
};

export default NotFoundPage;
