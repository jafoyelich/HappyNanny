import { Container, Grid, Stack, Typography } from "@mui/material";
import { CtaSection, Hero, ServiceCard, TestimonialsSection } from "@/components";


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
            </Container>
        </>
    );
}
