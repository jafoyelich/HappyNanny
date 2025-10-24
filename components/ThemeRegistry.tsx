"use client";

import { PropsWithChildren, useEffect } from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/src/theme";

const focusOutlineStyles = (
    <GlobalStyles
        styles={{
            ":focus-visible": {
                outline: "3px solid rgba(30, 64, 175, 0.75)",
                outlineOffset: "2px"
            }
        }}
    />
);

export default function ThemeRegistry({ children }: PropsWithChildren) {
    useEffect(() => {
        document.body.style.backgroundColor = theme.palette.background.default;
    }, []);

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {focusOutlineStyles}
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
