import { createTheme } from "@mui/material";
import { grey, orange, yellow } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: orange,
        secondary: yellow,
        bgColorGrey: {
            light: '#ebebeb',
            medium: '#b0aeae',
            dark: '#525151',
        }
    },
    floatingIconStyle: {
        position: "absolute",
        borderRadius: "50%",
        boxShadow: { xs: 1 },
        width: { xs: "50px" },
        height: { xs: "50px" },
        textAlign: "center",
        paddingTop: 1,
    },

});