import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/GlobalStyles";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useDarkMode } from "./hooks/useDarkMode";
import { NavBar } from "./components/NavBar";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <NavBar theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
      <Screen />
      <div className="buttonBox">
        {btnValues.flat().map((btn, i) => (
          <Button value={btn} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
