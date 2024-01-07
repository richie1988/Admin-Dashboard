import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#a3a3a3",
          200: "#858585",
          300: "#666666",
          400: "#525252",
          500: "#3d3d3d",
          600: "#292929",
          700: "#141414",
          800: "#080b12",
          900: "#040509",
        },
        primary: {
          100: "#727681",
          200: "#434957",
          300: "#141b2d",
          400: "#101624",
          500: "#0c101b",
          600: "#080b12",
          700: "#040509",
          800: "#727681",
          900: "#434957",
        },
        greenAccent: {
          100: "#94e2cd",
          200: "#70d8bd",
          300: "#4cceac",
          400: "#3da58a",
          500: "#2e7c67",
          600: "#1e5245",
          700: "#0f2922",
          800: "#94e2cd",
          900: "#70d8bd",
        },
        redAccent: {
          100: "#e99592",
          200: "#e2726e",
          300: "#db4f4a",
          400: "#af3f3b",
          500: "#832f2c",
          600: "#58201e",
          700: "#2c100f",
          800: "#e99592",
          900: "#e2726e",
        },
        blueAccent: {
          100: "#a4a9fc",
          200: "#868dfb",
          300: "#6870fa",
          400: "#535ac8",
          500: "#3e4396",
          600: "#2a2d64",
          700: "#151632",
          800: "#a4a9fc",
          900: "#868dfb",
        },
      }
    : {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        pinkAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        orangeAccent: {
          100: "#ffede6",
          200: "#ffcdbf",
          300: "#ffa998",
          400: "#ff876f",
          500: "#ff6558",
          600: "#d7434b",
          700: "#ad323d",
          800: "#83212f",
          900: "#59111f",
        },
      }),
});

// mui theme settings
export const themesettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themesettings(mode)), [mode]);
  return [theme, colorMode];
};
