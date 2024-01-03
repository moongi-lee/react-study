import './App.css';
import Router from "./components/Router";

let moongi = 'app.js 파일입니다 - out.'
console.log(moongi)
function App() {
    let moongi = 'app.js 파일입니다 - in.'
    console.log(moongi)
  return (
      <>
        <Router/>
      </>
  );
}

export default App;
