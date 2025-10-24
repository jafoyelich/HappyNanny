import { Container, Grid, Stack, Typography } from "@mui/material";
import { CtaSection, Hero, ServiceCard, TestimonialsSection } from "@/components";

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
                <Stack spacing={3} textAlign="center" sx={{ mb: 6 }}>
                    <Stack spacing={1}>
                        <Typography variant="overline" color="text.secondary">
                            Programas educativos
                        </Typography>
                        <Typography component="h2" variant="h4">
                            Acompañamos cada etapa con experiencias significativas
                        </Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
                        Diseñamos itinerarios que integran juego, exploración y participación familiar para
                        desarrollar habilidades socioemocionales, cognitivas y motoras.
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    {services.map((service) => (
                        <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                            <ServiceCard {...service} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="lg">
                <TestimonialsSection />
            </Container>
            <CtaSection
                title="Visita nuestras salas y conoce al equipo que acompañará a tu familia"
                description="Agenda una reunión presencial o virtual con nuestra directora pedagógica para conversar sobre tus necesidades, horarios y enfoque educativo."
                primaryAction={{ label: "Agendar visita", href: "/horarios" }}
                secondaryAction={{ label: "Ver servicios", href: "/servicios" }}
                highlights={[
                    "Tour guiado por las salas y espacios exteriores",
                    "Plan de adaptación y acompañamiento personalizado",
                    "Entrega de dossier informativo con programas y valores"
                ]}
            />
        </>
    );
}
