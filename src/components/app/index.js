import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../header";
import Students from "../../pages/students";
import AddStudent from "../../pages/addStudent";
import NotFoundPage from "../../pages/notFoundPage";
import styles from "./app.module.css";


function App() {
  return (
    <>
        <Header />
        <main className={styles.content}>
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
