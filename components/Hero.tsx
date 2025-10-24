"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid  from "@mui/material/GridLegacy";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Stack spacing={3}>
                            <Typography component="h1" variant="h3">
                                Tu espacio de confianza para el desarrollo y bienestar de los niños
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                En Happy Nannys, ofrecemos un entorno seguro y estimulante donde los niños pueden explorar, aprender y crecer a su propio ritmo, mientras brindamos tranquilidad a las familias.
                            </Typography>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                <Button
                                    component={Link}
                                    href="/servicios"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    Descubre nuestros servicios
                                </Button>
                                <Button component={Link} href="/horarios" variant="outlined" color="secondary" size="large">
                                    Agenda una visita
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: 6,
                                overflow: "hidden",
                                boxShadow: 4
                            }}
                        >
                            <Image
                                src="/images/hero-illustration.svg"
                                alt="Ilustración de niñas y niños aprendiendo en un entorno creativo"
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                                priority
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
