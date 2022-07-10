import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
      </div>
    </>
  );
}

export default App;
