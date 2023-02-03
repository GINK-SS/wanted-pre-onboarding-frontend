import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/signin" />} />
        <Route
          path="/signup"
          component={() =>
            localStorage.getItem('wantedAccessToken') ? (
              <Redirect to="/todo" />
            ) : (
              <SignUp />
            )
          }
        ></Route>
        <Route
          path="/signin"
          component={() =>
            localStorage.getItem('wantedAccessToken') ? (
              <Redirect to="/todo" />
            ) : (
              <SignIn />
            )
          }
        ></Route>
        <Route
          path="/todo"
          component={() =>
            localStorage.getItem('wantedAccessToken') ? (
              <Redirect to="/todo" />
            ) : (
              <Redirect to="/signin" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
