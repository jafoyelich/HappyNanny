import { Container, Grid, Stack, Typography } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { Hero, ServiceCard } from "@/components";

const services = [
    {
        title: "Sala Cuna",
        description:
            "Rutinas sensoriales, estimulación temprana y vínculo afectivo acompañando a familias y bebés.",
        highlights: ["0 a 2 años", "Plan personalizado", "Acompañamiento familiar"]
    },
    {
        title: "Nivel Medio Menor",
        description:
            "Exploración del entorno con experiencias lúdicas que potencian motricidad y lenguaje.",
        highlights: ["2 a 3 años", "Proyecto anual", "Psicomotricidad"]
    },
    {
        title: "Nivel Medio Mayor",
        description:
            "Preparación para la transición a prekínder reforzando autonomía, convivencia y curiosidad científica.",
        highlights: ["3 a 4 años", "Inglés lúdico", "Huerto y arte"]
    }
];

export default function HomePage() {
    return (
        <>
            <Hero />
            <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Stack spacing={3} textAlign="center" sx={{ mb: 4 }}>
                    <Typography component="h2" variant="h4">
                        Programas que acompañan cada etapa
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Diseñamos itinerarios de aprendizaje que integran juego, exploración y participación
                        familiar.
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    {services.map((service) => (
                        <GridLegacy item xs={12} md={4} key={service.title}>
                            <ServiceCard {...service} />
                        </GridLegacy>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
