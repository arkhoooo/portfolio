import { useState, useEffect } from "react";
import styles from "./style.module.css";

const TestApi = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const url = "https://free-nba.p.rapidapi.com/teams?page=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4cfd1b02b3msh2a9b53624af44bbp10db55jsncdfd7be2d201",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setTeamData(res.data);
        setIsLoad(false);
      });
  }, []);

  console.log(teamData);

  return (
    <div className={styles.container}>
      {isLoad && <div>Загрузка...</div>}
      {teamData.map((el) => {
        return (
          <div key={el.id}>
            {el.id}.{el.abbreviation} {el.city}
          </div>
        );
      })}
    </div>
  );
};

export default TestApi;
