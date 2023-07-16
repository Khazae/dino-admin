import { useState } from "react";
import Input from "../../../../common/components/Input";
import Textarea from "../../../../common/components/Textarea";
import styles from "./styles.module.css";

interface Props {
  submitLoading?: boolean;
  onSubmit?: (form: Form) => void;
}

interface Form {
  title: string;
  description: string;
  image: string;
  year: string;
  deathYear: string;
  category: string;
}

const CreateDino = ({
  submitLoading = false,
  onSubmit = () => ({}),
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    year: "",
    deathYear: "",
    category: "",
  } as Form);

  return (
    <>
      <h2>Создать запись</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <Input
            placeholder="Имя"
            onChange={(title) => setForm({ ...form, title })}
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            placeholder="Ссылка на фото"
            onChange={(image) => setForm({ ...form, image })}
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            placeholder="Год"
            onChange={(year) => setForm({ ...form, year })}
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            placeholder="Вымер"
            onChange={(deathYear) => setForm({ ...form, deathYear })}
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            placeholder="Классификация"
            onChange={(category) => setForm({ ...form, category })}
          />
        </div>

        <div className={styles.formGroup}>
          <Textarea
            placeholder="Описание"
            onChange={(description) => setForm({ ...form, description })}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default CreateDino;
