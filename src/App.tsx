import { useEffect, useState } from "react";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Loader from "./components/ui/Button/loader/Loader";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Error")

  useEffect(() => {
    const loadingFunction = async () => {
      try {
        setLoading(true);
        await new Promise((rej) => setTimeout(rej, Math.random() * 6000 + 100));
        setLoading(false);
      } catch (error) {
        setLoading(false)
        throw new Error(message, { cause: error });
      }
    };
    window.addEventListener("load", loadingFunction)
    return ()=> window.removeEventListener("load", loadingFunction)
  }, [message]);

  if(loading) return <Loader/>

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
