import { useAuth } from "../Hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const { user } = useAuth();

  return user?.id ? <AppRoutes /> : <AuthRoutes />

}