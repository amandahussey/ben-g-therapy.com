import { Stack, Typography } from "@mui/material";

import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";
import "./App.css";

function App() {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={4}>
        <Typography variant="h4" textAlign="left" maxWidth={600}>
          How would it feel to be heard, understood, and supported through hard
          times in your life?
        </Typography>
        <Stack alignItems="center" justifyContent="center" spacing={3}>
          <img src={ben} style={{ height: 400, borderRadius: "50%" }} />
          <Typography variant="h5">Ben Green, LCPP</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Typography variant="h5">
          Imagine moving through life with the confidence to be yourself, not
          hiding or being concerned about how you are being perceived. What if
          your mind was an asset instead of your worst enemy!
        </Typography>
        <img src={benSilly} style={{ height: 200, borderRadius: "50%" }} />
      </Stack>

      <Typography variant="h6">
        You can embody joy, embrace life and face challenges you thought
        impossible. Through a multi-diciplinary approach leaning heavily on EMDR
        and CBT, I am here to support you and provide meaningful methods for
        change into your life. Don't let another day go by without being seen,
        heard, and supported!
      </Typography>
    </Stack>
  );
}

export default App;
