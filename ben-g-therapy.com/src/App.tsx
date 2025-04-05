import {
  Link,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ben from "./assets/ben.jpg";
import benSilly from "./assets/ben-silly.jpg";

import mentalHealthIcon from "./assets/mental-health.png";
import relievedIcon from "./assets/relieved.png";
import therapyIcon from "./assets/therapy.png";
import cognitiveHealthIcon from "./assets/cognitive-control.png";

const green = "#198e64"; // #198E64

import "./App.css";
import { theme } from "./theme";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Stack
        justifyContent="center"
        alignItems="center"
        maxWidth={isMobile ? undefined : 1000}
      >
        {/* Section 1 */}
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="center"
          spacing={4}
          minHeight="100vh"
        >
          <Typography variant="h4" textAlign={isMobile ? "center" : "left"}>
            How would it feel to be heard, understood, and supported through
            hard times in your life?
          </Typography>
          <Stack alignItems="center" justifyContent="center" spacing={3}>
            <img
              src={ben}
              style={{ height: isMobile ? 300 : 400, borderRadius: "50%" }}
            />
            <Stack width="100%">
              <Typography variant="h5" textAlign={isMobile ? "center" : "left"}>
                Ben Green, LPCC
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
        <Stack justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={4}
            minHeight="100vh"
          >
            <img src={mentalHealthIcon} style={{ height: 150 }} />
            <Typography
              variant="h4"
              textAlign={isMobile ? "center" : "left"}
              fontStyle="italic"
            >
              What if your mind was an asset instead of your worst enemy?
            </Typography>
          </Stack>

          <Stack
            minHeight="100vh"
            direction="row"
            alignItems="center"
            spacing={isMobile ? 2.5 : 4}
          >
            <img
              src={relievedIcon}
              style={{
                height: isMobile ? 100 : 150,
                position: "relative",
                top: isMobile ? 0 : -12,
              }}
            />

            <Stack spacing={3}>
              <Typography variant="h5" textAlign="left">
                You can embody joy, embrace life, and face challenges you never
                thought possible.
              </Typography>

              {!isMobile && (
                <Typography variant="h5" textAlign="left">
                  Through a multi-diciplinary approach leaning on EMDR and CBT,
                  I am here to provide methods that support meaninful change in
                  your life.
                </Typography>
              )}
            </Stack>
          </Stack>

          {isMobile && (
            <Stack
              direction="row"
              justifyContent="center"
              spacing={4}
              minHeight="100vh"
            >
              <img
                src={cognitiveHealthIcon}
                style={{
                  height: 100,
                }}
              />
              <Typography variant="h5" textAlign="left">
                Through a multi-diciplinary approach leaning on EMDR and CBT, I
                am here to provide methods that support meaninful change in your
                life.
              </Typography>
            </Stack>
          )}
        </Stack>

        <Stack minHeight="100vh">
          <Stack
            direction={isMobile ? "column-reverse" : "row"}
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography variant="h5" textAlign={isMobile ? "center" : "left"}>
              Imagine moving through life with the confidence to be yourself,
              not hiding or being concerned about how you are being perceived.
            </Typography>

            <img
              src={benSilly}
              style={{
                height: 350,
                borderRadius: "50%",
              }}
            />
          </Stack>

          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            mt={isMobile ? 12 : undefined}
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
