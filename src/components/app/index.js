import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Students from "../../pages/students";
import AddStudent from "../../pages/addStudent";
import NotFoundPage from "../../pages/notFoundPage";
import styles from "./app.module.css";


function App() {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.header__icon}>
                    <div className={styles.icon__inner} />
                </div>
                <span className={styles.header__title}>STUDENTS</span>
            </div>
        </header>
        <main className={styles.main}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Students />
                    </Route>
                    <Route exact path="/addStudent">
                        <AddStudent />
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </main>
    </>
  );
}

export default App;
