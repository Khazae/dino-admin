import axios from "axios";
import CreateDino from "../../components/CreateDino";
import styles from "./styles.module.css";

const ListDinoView = () => {
  const handleCreateEventModalSubmit = async (form: {
    title: string;
    description: string;
    image: string;
    year: string;
    deathYear: string;
    category: string;
  }) => {
    try {
      const newDino = await axios.post("http://localhost:3000/dino", {
        ...form,
      });
      console.log(newDino);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.create}>
        <CreateDino onSubmit={handleCreateEventModalSubmit} />
      </div>
    </div>
  );
};

export default ListDinoView;
