"use client";

import { Box, Container, Link as MuiLink, Stack, Typography } from "@mui/material";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", mt: 6, py: 4 }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                    spacing={2}
                    role="contentinfo"
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} Happy Nannys. Todos los derechos reservados.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <MuiLink href="mailto:happynanny@mail.com" color="primary">
                            happynanny@mail.com
                        </MuiLink>
                        <MuiLink href="tel:+59163350130" color="primary">
                            +59 1 6335 0130
                        </MuiLink>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}