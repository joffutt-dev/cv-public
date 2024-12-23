import { Header } from "./components/Header";
import { MainRouter } from "./containers/MainRouter";
import "./styles/mainStyles.css";

export function App() {
  return (
    <>
      <Header />
      <MainRouter />
    </>
  );
}
