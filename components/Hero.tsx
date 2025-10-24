"use client";

import { Box, Grid, Button, Chip, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 8, md: 12 },
                background: {
                    xs: "linear-gradient(180deg, rgba(252, 227, 230, 0.55) 0%, rgba(255, 248, 240, 0.95) 100%)",
                    md: "linear-gradient(120deg, rgba(252, 227, 230, 0.55) 0%, rgba(238, 247, 255, 0.8) 55%, #FFF8F0 100%)"
                }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3}>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Chip
                                    label="Educación personalizada"
                                    color="secondary"
                                    sx={{ fontWeight: 600, bgcolor: "secondary.light" }}
                                />
                                <Chip
                                    label="Niñeras certificadas"
                                    sx={{ fontWeight: 600, bgcolor: "warning.main", color: "warning.contrastText" }}
                                />
                            </Stack>
                            <Typography component="h1" variant="h2">
                                Tu espacio confiable para el desarrollo y bienestar infantil
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                                En Happy Nannys acompañamos a cada familia con rutinas afectivas, experiencias lúdicas
                                y seguimiento profesional para que niñas y niños crezcan seguros y felices.
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
                                <Button
                                    component={Link}
                                    href="/horarios"
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                >
                                    Agenda una visita
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: 10,
                                overflow: "hidden",
                                boxShadow: "0 25px 65px rgba(26, 41, 48, 0.12)",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 20,
                                    borderRadius: 8,
                                    border: "1px solid rgba(255, 255, 255, 0.6)",
                                    pointerEvents: "none"
                                }
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
