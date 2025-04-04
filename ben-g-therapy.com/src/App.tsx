import { Link, Stack, ThemeProvider, Typography } from "@mui/material";

import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";
import "./App.css";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent="center" alignItems="center">
        {/* Section 1 */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          minHeight="100vh"
        >
          <Typography variant="h4" textAlign="left" maxWidth={600}>
            How would it feel to be heard, understood, and supported through
            hard times in your life?
          </Typography>
          <Stack alignItems="center" justifyContent="center" spacing={3}>
            <img src={ben} style={{ height: 400, borderRadius: "50%" }} />
            <Stack width="100%">
              <Typography variant="h5" textAlign="left">
                Ben Green, LCPP
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="right"
                fontStyle="italic"
              >
                featuring Gandalf, BBE (Best Boy Ever)
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Section 2 */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={4}
          minHeight="100vh"
        >
          <img src={benSilly} style={{ height: 300, borderRadius: "50%" }} />
          <Stack spacing={3}>
            <Typography variant="h5" textAlign="left">
              Imagine moving through life with the confidence to be yourself,
              not hiding or being concerned about how you are being perceived.
              What if your mind was an asset instead of your worst enemy!
            </Typography>
            <Typography variant="h5" textAlign="left">
              You can embody joy, embrace life and face challenges you thought
              impossible.
            </Typography>
          </Stack>
        </Stack>

        {/* Section 3 */}
        <Stack
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          spacing={4}
        >
          <Typography variant="h5">
            Through a multi-diciplinary approach leaning heavily on EMDR and
            CBT, I am here to support you and provide meaningful methods for
            change into your life.
          </Typography>

          <Typography variant="h4">
            Don't let another day go by without being seen, heard, and
            supported!
          </Typography>

          <Typography variant="h5">
            Give me a call to set up your first appointment today!
          </Typography>
          <Link variant="h4" href="tel:303-951-6430">
            (303) 951-6430
          </Link>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
