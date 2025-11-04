const ButtonProps = ({ action, title }) => {
  return (
    <button style={{ margin: "0px 5px" }} onClick={action}>
      {title}
    </button>
  );
};

export default ButtonProps;
