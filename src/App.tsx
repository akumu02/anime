import { OptionPage } from "./pages/OptionPage";
// import opLogo from "./assets/onepiecelogo.png";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <OptionPage />
      {/* <div>
        <img src={opLogo} className="logo react" alt="logo" />
      </div> */}
    </div>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   const fetchCall = async () => {
//     try {
//       const resp = await axios.get("https://api.jikan.moe/v4/characters");
//       console.log({ resp });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="App">
//       <div>
//         {/* <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank"> */}
//         <img src={opLogo} className="logo" alt="React logo" />
//         {/* </a> */}
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={fetchCall}>fetch</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

// export default App;
