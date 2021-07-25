import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentsPage = lazy(() => import("../components/StudentsPage"));
const CoursesPage = lazy(() => import("../components/CoursesPage"));

const App = () => {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={StudentsPage} exact />
          <Route path="/courses" component={CoursesPage} exact />
        </Switch>
      </Suspense>
    </main>
  );
};

export default App;
