import { useEffect, useState } from "react";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Loader from "./components/ui/Loader/Loader";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  // const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const loadingFunction = async () => {
      try {
        setLoading(true);
        await new Promise((reslove) =>
          setTimeout(reslove, Math.random() * 2900),
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);

      }
    };
    loadingFunction();

    return () => {
      if (loading) {
        setLoading(false);
      }
    };
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
