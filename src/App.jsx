import LandingPage from "./pages/LandingPage/LandingPage";
import pattern from "./assets/Pattern.png";
function App() {
  return (
    <>
      <div
        className="w-screen h-screen"
        style={{ backgroundImage: `url(${pattern})` }}>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
