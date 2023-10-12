import LoadingPage from "./components/LoadingPage";
import useAuth from "./hooks/useAuth";
import Route from "./router/Route";

function App() {
  const { initLoad } = useAuth();
  return initLoad ? <LoadingPage /> : <Route />;
}

export default App;
