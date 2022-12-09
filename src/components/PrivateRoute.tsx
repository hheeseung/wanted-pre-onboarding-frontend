import { Redirect, Route, RouteProps } from "react-router-dom";
import { isLogin } from "../utils/isLogin";

interface IPrivateRoute extends RouteProps {
  component: any;
}

export function PrivateRoute({ component: Component, ...rest }: IPrivateRoute) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
