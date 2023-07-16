import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  value?: string | number;
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  value,
  type = "text",
  placeholder,
  className,
  onChange = () => ({}),
}: Props) => {
  return (
    <>
      <input
        className={classNames(styles.input, className)}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

export default Input;
