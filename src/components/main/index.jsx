import { Switch, Route } from "react-router-dom";
import styles from "./style.module.css";
import Home from "../home";
import TestApi from "../test-api";
import Chat from "../chat";

const Main = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/api" component={TestApi} />
      </Switch>
    </div>
  );
};

export default Main;
