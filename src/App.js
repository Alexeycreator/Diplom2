import "./App.css";
import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import AgregatorCalendars from "./components/calendars/AgregatorCalendars";
import Navigation from "./components/layout/Navigation";
import NotFound from "./components/pages/NotFound";
import AddUsers from "./components/users/AddUsers";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

import moment, { updateLocale } from "moment";
import GooglePage from "./components/pages/GooglePage";
import YandexPage from "./components/pages/YandexPage";

import AddSob from "./components/calendars/sobities/AddSob";
import EditSob from "./components/calendars/sobities/EditSob";
import ViewSob from "./components/calendars/sobities/ViewSob";

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  //навигация
  const previeMath = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayMath = () => {
    setToday(moment());
  };
  const nextMath = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/googleCalendar"
            render={() => (
              <GooglePage
                startDay={startDay}
                today={today}
                previeMath={previeMath}
                todayMath={todayMath}
                nextMath={nextMath}
              />
            )}
          />
          <Route
            exact
            path="/yandexCalendar"
            render={() => (
              <YandexPage
                startDay={startDay}
                today={today}
                previeMath={previeMath}
                todayMath={todayMath}
                nextMath={nextMath}
              />
            )}
          />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />

          <Route exact path="/sobities/add" component={AddSob} />
          <Route exact path="/sobities/:id" component={ViewSob} />
          <Route exact path="/sobities/edit/:id" component={EditSob} />
          <Route
            exact
            path="/agregatorCalendar"
            component={AgregatorCalendars}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
