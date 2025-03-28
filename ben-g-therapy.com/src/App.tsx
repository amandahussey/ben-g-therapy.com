import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={ben} className="logo" alt="Vite logo" />

        <img src={benSilly} className="logo react" alt="React logo" />
      </div>
      <h1>Ben Green</h1>
      <h2>
        How would it feel to be heard, understood, and supported through hard
        times in your life?
      </h2>
      <h3>
        Imagine moving through life with the confidence to be yourself, not
        hiding or being concerned about how you are being perceived. What if
        your mind was an asset instead of your worst enemy!
      </h3>
      <h4>
        You can embody joy, embrace life and face challenges you thought
        impossible. Through a multi-diciplinary approach leaning heavily on EMDR
        and CBT, I am here to support you and provide meaningful methods for
        change into your life. Don't let another day go by without being seen,
        heard, and supported!
      </h4>
    </>
  );
}

export default App;
