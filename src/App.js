import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactLoader from "./components/loader";
import * as ROUTES from "./constants/routes";

import ProtectedRoute from "./helpers/protected-route";
import useUser from "./hooks/use-user";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  const { user, setActiveUser } = useUser();

  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
            <Dashboard user={user} setActiveUser={setActiveUser} />
          </ProtectedRoute>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
