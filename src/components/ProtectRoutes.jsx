import { useEffect } from "react";
import { useAuth } from "@contexts/auth";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectRoutes() {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/access/login");
    }
  }, [isLogged]);

  return isLogged ? <Outlet /> : null;
}
