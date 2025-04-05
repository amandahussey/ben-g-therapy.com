import {
  Link,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ben from "./assets/ben.jpg";
import mentalHealthIcon from "./assets/mental-health.png";
import relievedIcon from "./assets/relieved.png";
import therapyIcon from "./assets/therapy.png";
import cognitiveHealthIcon from "./assets/cognitive-control.png";
import confidenceIcon from "./assets/confidence.png";
import umbrellaIcon from "./assets/umbrella.png";

const green = "#32A77D"; // #198E64

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
        {/* Intro */}
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="center"
          spacing={8}
          minHeight="100vh"
        >
          <Stack alignItems="center" justifyContent="center" spacing={3}>
            <img
              src={ben}
              style={{ height: isMobile ? 300 : 400, borderRadius: "50%" }}
            />
            <Stack width="100%">
              <Typography variant="h6" textAlign={isMobile ? "center" : "left"}>
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
        <Stack
          minHeight="100vh"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <img src={umbrellaIcon} style={{ height: isMobile ? 100 : 150 }} />
          <Typography variant="h5" textAlign={isMobile ? "center" : "left"}>
            How would it feel to be heard, understood, and supported through
            hard times in your life?
          </Typography>
        </Stack>
        {/* What if your mind was an asset instead of your worst enemy? */}
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={3}
          minHeight="100vh"
        >
          <img
            src={mentalHealthIcon}
            style={{ height: isMobile ? 100 : 150 }}
          />
          <Typography variant="h5" textAlign={isMobile ? "center" : "left"}>
            What if your mind is an asset instead of your worst enemy?
          </Typography>
        </Stack>

        {/* Move with confidence */}
        <Stack
          direction={isMobile ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="center"
          spacing={4}
          minHeight="100vh"
        >
          <Typography variant="h5" textAlign={isMobile ? "center" : "left"}>
            Imagine moving through life with the confidence to be yourself, not
            hiding or being concerned about how you are being perceived.
          </Typography>

          <img
            src={confidenceIcon}
            style={{
              height: isMobile ? 100 : 350,
              borderRadius: "50%",
            }}
          />
        </Stack>

        {/* Embody joy */}
        <Stack minHeight="100vh" alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={isMobile ? 2.5 : 4}>
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
        </Stack>

        {isMobile && (
          <Stack minHeight="100vh" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={4}>
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
          </Stack>
        )}
        {/* Be seen, heard */}
        <Stack
          spacing={6}
          alignItems="center"
          justifyContent="center"
          minHeight="45vh"
          pt={4}
        >
          <img src={therapyIcon} style={{ height: isMobile ? 100 : 200 }} />
          <Typography variant="h5">
            Don't let another day go by without being seen, heard, and
            supported.
          </Typography>
        </Stack>

        {/* Contact Section */}
        <Stack
          spacing={6}
          alignItems="center"
          justifyContent="center"
          minHeight="50vh"
        >
          <Typography variant="h5">
            Give me a call to set up an appointment today!
          </Typography>
          <Typography variant="h5">
            Ben Green:{" "}
            <Link variant="h5" href="tel:303-951-6430" color={green}>
              (303) 951-6430
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
