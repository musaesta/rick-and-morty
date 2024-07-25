// React
import { Routes, Route } from "react-router-dom";
// Components
import { Header } from "../../components/Header/Header";
import { CharactersPage } from "../CharactersPage/CharactersPage";
// Styles
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Routes>
        <Route path="/" element={<CharactersPage />} />
      </Routes>
    </div>
  );
};
export default App;
