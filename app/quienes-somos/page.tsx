import { Metadata } from "next";
import { Container, Grid, Stack, Typography } from "@mui/material";

export const metadata: Metadata = {
    title: "Quiénes Somos",
    description:
        "Conoce al equipo y el proyecto pedagógico de Parvularia, un jardín infantil centrado en la familia."
};

const values = [
    {
        title: "Educación integral",
        description: "Atendemos dimensiones emocionales, cognitivas y sociales con experiencias activas."
    },
    {
        title: "Vínculos afectivos",
        description: "Cuidamos la relación familia-equipo con comunicación cercana y acompañamiento."
    },
    {
        title: "Ambiente seguro",
        description: "Espacios diseñados con criterios sensoriales y ergonomía para la primera infancia."
    }
];

export default function QuienesSomosPage() {
    return (
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Stack spacing={3} sx={{ mb: 6 }}>
                <Typography component="h1" variant="h3">
                    Somos un equipo dedicado al cuidado infantil
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth="md">
                    Happy Nannys es una red de educadoras parvularias y niñeras profesionales dedicadas al cuidado infantil,
                    la estimulación temprana y el acompañamiento pedagógico. Brindamos atención personalizada, con amor,
                    seguridad y aprendizaje, adaptada a las necesidades de cada familia. Nuestras niñeras están capacitadas en desarrollo infantil,
                    estimulación del lenguaje, motricidad y apoyo educativo, garantizando un entorno seguro y estimulante.
                </Typography>
            </Stack>
            <Grid container spacing={4}>
                {values.map((value) => {
                    const valueId = value.title.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <Grid key={value.title} size={{ xs: 12, md: 4 }}>
                            <Stack spacing={1.5} component="article" aria-labelledby={valueId}>
                                <Typography id={valueId} component="h2" variant="h5">
                                    {value.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {value.description}
                                </Typography>
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
