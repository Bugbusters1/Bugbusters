import "./App.css";
import Login from "./components/Login-SignUp/LoginPage.jsx";
import { useWindowSize } from "@uidotdev/usehooks";
function Browser({ size }) {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size.width / 4, height: size.height / 4 }}
    />
  );
}
function App() {
  return (
    


    <>
      <Login />
    </>
  );
}

export default App;
