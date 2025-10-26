import { Metadata } from "next";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { ServiceCard } from "@/components";

export const metadata: Metadata = {
    title: "Servicios",
    description:
        "Programas educativos flexibles, talleres extracurriculares y apoyo familiar en Parvularia."
};

const serviceCatalog = [
    {
        title: "Estimulación temprana",
        description:
            "Dirigida a niños de 0 a 3 años para fortalecer su desarrollo integral mediante:",
        highlights: ["Juegos sensoriales y coordinación", "Actividades de movimiento", "equilibrio y motricidad fina.", "Estimulación visual, auditiva y táctil."]
    },
    {
        title: "Acompañamiento en Actividades Educativas",
        description:
            "Apoyo pedagógico para niños en edad preescolar y escolar:",
        highlights: ["Refuerzo de tareas y aprendizajes.", "Actividades lúdicas", "Apoyo en hábitos", "preparación para el ingreso escolar."]
    },
    {
        title: "Estimulación del lenguaje y motricidad",
        description:
            "Ejercicios y juegos para favorecer la comunicación, pronunciación y coordinación corporal:",
        highlights: ["Actividades de respiración, articulación y ritmo.", "Cuentos, canciones y rimas.", "Motricidad gruesa y fina con materiales didácticos."]
    },
    {
        title: "Cuidado Infantil Nocturno",
        description:
            "Servicio especializado para padres que trabajan o estudian de noche",
        highlights: ["Rutina de sueño segura", "Supervisión del descanso", "Cena incluida", "Actividades relajantes", "Atención por noche o mensual"]
    }
];

export default function ServiciosPage() {
    return (
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Stack spacing={3} sx={{ mb: 6 }}>
                <Typography component="h1" variant="h3">
                    Servicios para acompañar cada proceso
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth="md">
                    Adaptamos nuestros servicios para responder a los intereses y necesidades de cada familia.
                    Todas las experiencias se planifican con enfoque en bienestar y desarrollo integral.
                </Typography>
            </Stack>
            <Grid container spacing={4}>
                {serviceCatalog.map((service) => (
                    <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                        <ServiceCard {...service} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
