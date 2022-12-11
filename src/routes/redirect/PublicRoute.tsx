import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin } from "../../utils/isLogin";

interface IPublicRoute extends RouteProps {
  component: any;
  restricted: boolean;
}

export function PublicRoute({
  component: Component,
  restricted,
  ...rest
}: IPublicRoute) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/todo" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
