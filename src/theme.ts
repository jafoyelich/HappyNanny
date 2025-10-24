import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#F7BFC4",
            light: "#FCE3E6",
            dark: "#E28A92",
            contrastText: "#3f3a3a"
        },
        secondary: {
            main: "#BEE3F8",
            light: "#E4F4FF",
            dark: "#84BEE0",
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
            fontWeight: 700,
            lineHeight: 1.1
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.15
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.2
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
                    paddingBlock: "0.65rem",
                    boxShadow: "0 10px 22px rgba(247, 191, 196, 0.35)",
                    "&:hover": {
                        boxShadow: "0 14px 30px rgba(247, 191, 196, 0.42)"
                    }
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 20px 35px rgba(26, 41, 48, 0.1)"
                    }
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.35)"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FCE3E6",
                    "& .MuiTableCell-root": {
                        fontWeight: 600
                    }
                }
            }
        }
    }
});

export default theme;
