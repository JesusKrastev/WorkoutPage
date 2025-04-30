import Footer from "@layouts/Footer";
import Main from "@layouts/Main";
import GetItOnGooglePlayImg from "@assets/get-it-on-google-play.webp";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Main>
        <HeroSection />
        <FeaturesSection />
      </Main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <header className="bg-theme-background-light dark:bg-theme-background-dark flex justify-center">
      <div className="w-full max-w-5xl block md:flex md:justify-between items-center h-135">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-4">
            <Advise />
            <HeroTitle />
            <HeroSubtitle />
          </div>
          <GetItOnGooglePlayButton />
        </div>
        <div></div>
      </div>
    </header>
  );
}

function Advise() {
  return (
    <div className="flex items-center gap-4 bg-theme-surface-light dark:bg-theme-surface-dark w-fit rounded-4xl py-1 px-1 pr-4">
      <div className="bg-theme-background-dark dark:bg-theme-background-light text-theme-text-primary-dark dark:text-theme-text-primary-light font-semibold px-4 py-2 w-fit rounded-4xl">
        Nuevo!
      </div>
      <div className="text-theme-text-secondary-light dark:text-theme-text-secondary-dark">
        Nueva actualización para usuarios activos 🔥
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <h1 className="text-5xl font-bold leading-tight max-w-2xl">
      Conviértete En La Mejor Versión De Ti Mismo
    </h1>
  );
}

function HeroSubtitle() {
  return (
    <h2 className="text-xl font-[350] text-theme-text-secondary-light dark:text-theme-text-secondary-dark max-w-[23em] leading-5.5">
      Personaliza tus entrenamientos, explora rutinas de otros, obtén ayuda con
      IA y mide tu progreso con estadísticas
    </h2>
  );
}

function GetItOnGooglePlayButton() {
  return (
    <Link
      to={
        "https://play.google.com/store/apps/details?id=com.jesuskrastev.workout&pcampaignid=web_share"
      }
      className="border rounded-lg w-fit"
    >
      <img
        src={GetItOnGooglePlayImg}
        alt="download app google play button"
        className="w-50"
      />
    </Link>
  );
}

function FeaturesSection() {
  return (
    <section className="w-full flex justify-center items-center bg-theme-surface-light dark:bg-theme-surface-dark">
      <div>Caracteristicas</div>
    </section>
  );
}
