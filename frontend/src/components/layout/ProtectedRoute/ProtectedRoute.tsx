import { ReactNode, FC, useEffect } from "react";
import { RouteProps, useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser.ts";

import { ROUTES } from "../../../config/routes.ts";

type ProtectedRouteProps = RouteProps & {
  element: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN);
    }
  }, [user]);

  return element;
};

export default ProtectedRoute;
