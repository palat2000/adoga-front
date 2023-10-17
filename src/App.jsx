import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "./components/LoadingPage";
import useAuth from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  const { initLoad } = useAuth();
  return initLoad ? (
    <LoadingPage />
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Route />
    </>
  );
}

export default App;
