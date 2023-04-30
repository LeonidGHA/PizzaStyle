import css from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={css.loading_wrapper}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loading;
