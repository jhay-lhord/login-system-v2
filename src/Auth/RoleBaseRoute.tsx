import React, { lazy, Suspense } from "react";
import useAuthStore from "./AuthStore";
import Loading from "@/components/Loading";

const Login  = lazy(() => import("@/components/login"))
const HomePage = lazy(() => import("@/homepage"))


const RoleBasedRouting: React.FC = () => {
  const { user } = useAuthStore();

  const DashboardComponent = React.useMemo(() => {

    switch (user?.role) {
      case "User":
        return HomePage;
      default:
        return Login;
    }
  }, [user?.role]);

  return (
      <Suspense fallback={<Loading/>}>
        <DashboardComponent />
      </Suspense>
  );
};

export default RoleBasedRouting;
