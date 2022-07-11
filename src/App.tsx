import { GlobalStyle } from "./styles/global";
import { Header } from "./Components/Header/Header";
import { Produtos } from "./Components/Produtos/Produtos";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <main>
          <Produtos/>
        </main>
      </div>
    </>
  );
}

export default App;
