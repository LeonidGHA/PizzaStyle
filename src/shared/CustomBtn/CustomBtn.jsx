const CustomBtn = ({ children, onClick, className }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomBtn;
