import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { Palette } from "@mui/icons-material";
import image from "./images/bg.png";

// color design token export
// export const tokens = (mode) => {
//   return {
//     ...(mode === "dark"
//       ? {
//           white: {
//             100: "#fdfdfb",
//             200: "#fcfbf7",
//             300: "#faf8f2",
//             400: "#f9f6ee",
//             500: "#f7f4ea",
//             600: "#c6c3bb",
//             700: "#94928c",
//             800: "#63625e",
//             900: "#31312f",
//           },
//           primary: {
//             100: "#cdcdcd",
//             200: "#9b9b9b",
//             300: "#696969",
//             400: "#373737",
//             500: "#050505",
//             600: "#040404",
//             700: "#030303",
//             800: "#020202",
//             900: "#010101",
//           },
//           indigo: {
//             100: "#d4d1d8",
//             200: "#a9a2b0",
//             300: "#7f7489",
//             400: "#544561",
//             500: "#29173a",
//             600: "#21122e",
//             700: "#190e23",
//             800: "#100917",
//             900: "#08050c",
//           },
//           violetAccent: {
//             100: "#f8eefd",
//             200: "#f2ddfb",
//             300: "#ebcdf9",
//             400: "#e5bcf7",
//             500: "#deabf5",
//             600: "#b289c4",
//             700: "#856793",
//             800: "#594462",
//             900: "#2c2231",
//           },
//           greenAccent: {
//             100: "#d2f6ef",
//             200: "#a5eddf",
//             300: "#77e5d0",
//             400: "#4adcc0",
//             500: "#1dd3b0",
//             600: "#17a98d",
//             700: "#117f6a",
//             800: "#0c5446",
//             900: "#062a23",
//           },
//           yellowAccent: {
//             100: "#fdf9db",
//             200: "#fbf3b8",
//             300: "#f8ec94",
//             400: "#f6e671",
//             500: "#f4e04d",
//             600: "#c3b33e",
//             700: "#92862e",
//             800: "#625a1f",
//             900: "#312d0f",
//           },
//         }
//       : {
//           white: {
//             100: "#31312f",
//             200: "#63625e",
//             300: "#94928c",
//             400: "#c6c3bb",
//             500: "#f7f4ea",
//             600: "#f9f6ee",
//             700: "#faf8f2",
//             800: "#fcfbf7",
//             900: "#fdfdfb",
//           },
//           primary: {
//             100: "#010101",
//             200: "#020202",
//             300: "#030303",
//             400: "#f2f0f0",
//             500: "#050505",
//             600: "#373737",
//             700: "#696969",
//             800: "#9b9b9b",
//             900: "#cdcdcd",
//           },
//           indigo: {
//             100: "#08050c",
//             200: "#100917",
//             300: "#190e23",
//             400: "#21122e",
//             500: "#29173a",
//             600: "#544561",
//             700: "#7f7489",
//             800: "#a9a2b0",
//             900: "#d4d1d8",
//           },
//           violetAccent: {
//             100: "#2c2231",
//             200: "#594462",
//             300: "#856793",
//             400: "#b289c4",
//             500: "#deabf5",
//             600: "#e5bcf7",
//             700: "#ebcdf9",
//             800: "#f2ddfb",
//             900: "#f8eefd",
//           },
//           greenAccent: {
//             100: "#062a23",
//             200: "#0c5446",
//             300: "#117f6a",
//             400: "#17a98d",
//             500: "#1dd3b0",
//             600: "#4adcc0",
//             700: "#77e5d0",
//             800: "#a5eddf",
//             900: "#d2f6ef",
//           },
//           yellowAccent: {
//             100: "#312d0f",
//             200: "#625a1f",
//             300: "#92862e",
//             400: "#c3b33e",
//             500: "#f4e04d",
//             600: "#f6e671",
//             700: "#f8ec94",
//             800: "#fbf3b8",
//             900: "#fdf9db",
//           },
//         }),
//   };
// };

export const tokens = (mode) => {
  return {
    ...(mode === "dark"
      ? {
          black: {
            100: "#cececf5c",
            200: "#9e9d9f",
            300: "#6d6d70",
            400: "#3d3c40",
            500: "#242329",
            600: "#0a090d",
            700: "#07070a",
            800: "#050406",
            900: "#020203",
          },
          primary: {
            100: "#d3d3d4",
            200: "#a7a7a959",
            300: "#7c7b7f",
            400: "#504f54",
            500: "#242329",
            600: "#1d1c21",
            700: "#161519",
            800: "#0e0e10",
            900: "#070708",
          },
          yellowAccent: {
            100: "#fdf1de",
            200: "#fce3bd",
            300: "#fad59b",
            400: "#f9c77a",
            500: "#f7b959",
            600: "#c69447",
            700: "#946f35",
            800: "#634a24",
            900: "#312512",
          },
          greenAccent: {
            100: "#ddf2ee",
            200: "#bbe6dd",
            300: "#98d9cc",
            400: "#76cdbb",
            500: "#54c0aa",
            600: "#439a88",
            700: "#327366",
            800: "#224d44",
            900: "#112622",
          },
          redAccent: {
            100: "#fbe4e1",
            200: "#f7c8c3",
            300: "#f2ada6",
            400: "#ee9188",
            500: "#ea766a",
            600: "#bb5e55",
            700: "#8c4740",
            800: "#5e2f2a",
            900: "#2f1815",
          },
          grey: {
            100: "#f6f8fa",
            200: "#eef1f5",
            300: "#e5eaf1",
            400: "#dde3ec",
            500: "#d4dce7",
            600: "#aab0b9",
            700: "#7f848b",
            800: "#55585c",
            900: "#2a2c2e",
          },
        }
      : {
          black: {
            100: "#020203",
            200: "#050406",
            300: "#07070a",
            400: "#0a090d",
            500: "#0c0b10",
            600: "#3d3c40",
            700: "#6d6d70",
            800: "#9e9d9f",
            900: "#f0ecec",
          },
          primary: {
            100: "#070708",
            200: "#0e0e10",
            300: "#161519",
            400: "#1d1c21",
            500: "#242329",
            600: "#504f54",
            700: "#7c7b7f",
            800: "#cececf5c",
            900: "#d3d3d4",
          },
          yellowAccent: {
            100: "#312512",
            200: "#634a24",
            300: "#946f35",
            400: "#c69447",
            500: "#f7b959",
            600: "#f9c77a",
            700: "#fad59b",
            800: "#fce3bd",
            900: "#fdf1de",
          },
          greenAccent: {
            100: "#112622",
            200: "#224d44",
            300: "#327366",
            400: "#439a88",
            500: "#54c0aa",
            600: "#76cdbb",
            700: "#98d9cc",
            800: "#bbe6dd",
            900: "#ddf2ee",
          },
          redAccent: {
            100: "#2f1815",
            200: "#5e2f2a",
            300: "#8c4740",
            400: "#bb5e55",
            500: "#ea766a",
            600: "#ee9188",
            700: "#f2ada6",
            800: "#f7c8c3",
            900: "#fbe4e1",
          },
          grey: {
            100: "#2a2c2e",
            200: "#55585c",
            300: "#7f848b",
            400: "#aab0b9",
            500: "#d4dce7",
            600: "#dde3ec",
            700: "#e5eaf1",
            800: "#eef1f5",
            900: "#f6f8fa",
          },
        }),
  };
};

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            view:{
              main: "#66B3FF"
            },
            warning:{
              main: "#ffa726"
            },
            danger:{
              main: colors.redAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[300],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            view:{
              main: "#66B3FF"
            },
            warning:{
              main: "#ffa726"
            },
            danger:{
              main: colors.redAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[300],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Color mode context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
