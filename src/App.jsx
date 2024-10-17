import "./App.css";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <div className="dark:bg-slate-800">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
