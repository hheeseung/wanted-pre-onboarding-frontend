import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";
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
