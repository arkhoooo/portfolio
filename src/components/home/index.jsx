import { useState } from "react";
import styles from "./style.module.css";
import { useLocalStorage } from "../../hook/useLocalStorage";

const Home = () => {
  const [user, setUser] = useLocalStorage("USER", "");
  const [inputName, setInputName] = useState("");

  return (
    <div className={styles.container}>
      {user && (
        <div>
          <div>Добро пожаловать {user}</div>
          <button onClick={() => setUser("")}>Выйти из аккаунта</button>
        </div>
      )}

      {!user && (
        <div>
          <label>Введите ваше имя:</label>
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={() => setUser(inputName)}>Сохранить</button>
        </div>
      )}
    </div>
  );
};

export default Home;
