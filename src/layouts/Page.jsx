import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ children, ...args }) {
  return (
    <>
      <Header />
      <Main className="min-h-screen" {...args}>
        {children}
      </Main>
      <Footer />
    </>
  );
}
