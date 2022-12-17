import { useHooksButton } from "../hooks/useHooksButton";

const Button = ({ value }) => {
  const [handleBtnClick, getStyleName] = useHooksButton({ value });

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
