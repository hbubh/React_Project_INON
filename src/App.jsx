import { Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import LayoutComponent from "./layout/LayoutComponent";
import Routes from "./routes/Router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import useAutoLogin from "./hooks/useAutoLogin";
import LoadingPageComponent from "./components/LoadingPageComponent";

const App = () => {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin(); //false is default
      } catch (err) {
        console.log(err);
      } finally {
        //this block of code will executed when the promise done
        //no matter if its done or got error
        setDoneAuth(true);
      }
    })();
  }, []);
  useEffect(() => {
    autoLogin();
  }, []);
  return (
    <Box>
      <LayoutComponent>
        <ToastContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {doneAuth ? <Routes /> : <LoadingPageComponent />}
      </LayoutComponent>
    </Box>
  );
};

export default App;
