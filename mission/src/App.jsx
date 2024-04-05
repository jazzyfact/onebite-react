import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const userProps = {
    name: "카페인",
    isMember: false,
  };

  return (
    <>
      <Welcome {...userProps} />
    </>
  );
}

export default App;
