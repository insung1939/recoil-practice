import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";
import CharacterCounter from "./components/CharacterCounter";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
