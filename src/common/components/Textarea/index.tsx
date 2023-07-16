import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  value?: string | number;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const Textarea = ({
  value,
  placeholder,
  className,
  onChange = () => ({}),
}: Props) => {
  return (
    <>
      <textarea
        className={classNames(styles.input, className)}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

export default Textarea;
