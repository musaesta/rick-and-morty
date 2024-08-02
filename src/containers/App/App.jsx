// React
import { Routes, Route } from "react-router-dom";
// Components
import { Header } from "../../components/Header/Header";
import CharactersPage from "../CharactersPage/CharactersPage";
import { PersonInfoPage } from "../PersonInfoPage/PersonInfoPage";
import { Search } from "../../components/Search/Search";
// Styles
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info" element={<PersonInfoPage />} />
      </Routes>
    </div>
  );
};
export default App;
