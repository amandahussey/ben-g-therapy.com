import { Typography } from "@mui/material";

import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img
          src={ben}
          alt="Vite logo"
          style={{ height: 200, borderRadius: "50%" }}
        />
        <h1>Ben Green</h1>
        <img
          src={benSilly}
          alt="React logo"
          style={{ height: 200, borderRadius: "50%" }}
        />
      </div>

      <Typography variant="h4">
        How would it feel to be heard, understood, and supported through hard
        times in your life?
      </Typography>
      <Typography variant="h5">
        Imagine moving through life with the confidence to be yourself, not
        hiding or being concerned about how you are being perceived. What if
        your mind was an asset instead of your worst enemy!
      </Typography>
      <Typography variant="h6">
        You can embody joy, embrace life and face challenges you thought
        impossible. Through a multi-diciplinary approach leaning heavily on EMDR
        and CBT, I am here to support you and provide meaningful methods for
        change into your life. Don't let another day go by without being seen,
        heard, and supported!
      </Typography>
    </>
  );
}

export default App;
