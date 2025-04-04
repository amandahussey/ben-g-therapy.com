import { Link, Stack, ThemeProvider, Typography } from "@mui/material";

import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";
import mentalHealthIcon from "./assets/mental-health.png";
import relievedIcon from "./assets/relieved.png";
import therapyIcon from "./assets/therapy.png";

import "./App.css";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent="center" alignItems="center" maxWidth={1200}>
        {/* Section 1 */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          minHeight="100vh"
        >
          <Typography variant="h4" textAlign="left">
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
          alignItems="center"
          justifyContent="center"
          spacing={4}
          minHeight="100vh"
          pb={8}
        >
          <Stack direction="row" alignItems="center" spacing={6}>
            <Typography variant="h5" textAlign="left">
              What if your mind was an asset instead of your worst enemy?
            </Typography>
            <img src={mentalHealthIcon} />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={4}>
            <img src={relievedIcon} />

            <Stack spacing={5}>
              <Typography variant="h5" textAlign="left">
                You can embody joy, embrace life and face challenges you thought
                impossible.
              </Typography>

              <Typography variant="h5" textAlign="left">
                Through a multi-diciplinary approach leaning heavily on EMDR and
                CBT, I am here to support you and provide meaningful methods for
                change into your life.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack minHeight="100vh">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography variant="h5" textAlign="left">
              Imagine moving through life with the confidence to be yourself,
              not hiding or being concerned about how you are being perceived.
            </Typography>

            <img src={benSilly} style={{ height: 400, borderRadius: "50%" }} />
          </Stack>

          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            pb={8}
          >
            <img src={therapyIcon} style={{ margin: 24 }} />
            <Typography variant="h5">
              Don't let another day go by without being seen, heard, and
              supported.
            </Typography>
            <Typography variant="h5">
              Give me a call to set up your first appointment today!
            </Typography>
            <Link variant="h4" href="tel:303-951-6430">
              (303) 951-6430
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
