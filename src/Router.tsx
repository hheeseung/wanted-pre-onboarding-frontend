import { BrowserRouter, Switch } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { PrivateRoute } from "./routes/Redirect/PrivateRoute";
import { PublicRoute } from "./routes/Redirect/PublicRoute";
import { Signup } from "./components/Auth/Signup";
import { Todo } from "./routes/Todo";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Login} restricted={true} path="/" exact />
        <PublicRoute
          component={Signup}
          restricted={true}
          path="/signup"
          exact
        />
        <PrivateRoute component={Todo} path="/todo" exact />
      </Switch>
    </BrowserRouter>
  );
}
