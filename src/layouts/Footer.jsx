import { getRouteByName } from "@pages/routes";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center pt-4">
      <div className="w-full max-w-5xl flex justify-between items-center">
        <div className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark font-semibold">
          © 2025 Workout
        </div>
        <div className="flex gap-4 font-semibold text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
          <Link to={getRouteByName("privacy_policy")}>
            Politica de privacidad
          </Link>
          <Link to={getRouteByName("user_terms")}>Términos y condiciones</Link>
        </div>
        <SocialBanner />
      </div>
    </footer>
  );
}

function SocialButton({ to, children }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="border h-10 w-10 flex justify-center items-center rounded-full transition-colors bg-theme-background-light dark:bg-theme-background-dark"
    >
      {children}
    </Link>
  );
}

function SocialBanner() {
  return (
    <div className="flex gap-2">
      <SocialButton to={"/"}>
        <IconBrandFacebook size={18} />
      </SocialButton>
      <SocialButton to={"/"}>
        <IconBrandInstagram size={18} />
      </SocialButton>
      <SocialButton to={"/"}>
        <IconBrandX size={18} />
      </SocialButton>
    </div>
  );
}
