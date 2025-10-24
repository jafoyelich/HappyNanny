import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#F7BFC4",
            contrastText: "#3f3a3a"
        },
        secondary: {
            main: "#BEE3F8",
            contrastText: "#1a2930"
        },
        warning: {
            main: "#FFF3B0",
            contrastText: "#665c00"
        },
        success: {
            main: "#C7EAD9",
            contrastText: "#1b4232"
        },
        background: {
            default: "#FFF8F0",
            paper: "#FFFFFF"
        },
        divider: "#E2E2E2"
    },
    typography: {
        fontFamily: `"Montserrat", "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
        h1: {
            fontWeight: 700
        },
        h2: {
            fontWeight: 700
        },
        button: {
            textTransform: "none",
            fontWeight: 600
        }
    },
    shape: {
        borderRadius: 12
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    paddingInline: "1.75rem",
                    paddingBlock: "0.65rem"
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        }
    }
});

export default theme;
