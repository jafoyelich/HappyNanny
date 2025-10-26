import { Metadata } from "next";
import { Container, Stack, Typography } from "@mui/material";
import ScheduleTable, { type ScheduleEntry } from "@/components/ScheduleTable";
import { CtaSection } from "@/components";

export const metadata: Metadata = {
    title: "Horarios",
    description: "Jornadas flexibles de mañana y tarde con extensión para facilitar tu organización."
};

const schedule: ScheduleEntry[] = [
    { turn: "Mañana", hour: "08:00 - 12:30", modality:"Estimulación y acompañamiento educativo" },
    { turn: "Tarde", hour: "14:00 - 18:00", modality:"Actividades lúdicas, motricidad y lenguaje" },
    { turn: "Noche", hour: "19:00 - 22:00", modality:"Niñeras nocturnas o cuidado relajado" },
    { turn: "Por horas", hour: "Flexible", modality:"Atención personalizada" },


];

export default function HorariosPage() {
    return (
        <>
            <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Stack spacing={3} sx={{ mb: 4 }}>
                    <Typography component="h1" variant="h3">
                        Horarios pensados para tu familia
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth="md">
                        Disponible en horarios de mañana, tarde o noche, con opción de actividades educativas o juego libre.
                    </Typography>
                </Stack>
                <ScheduleTable entries={schedule} />
            </Container>
            <CtaSection
                title="Organiza una visita para conocer nuestra rutina diaria"
                description="Te mostramos cómo distribuimos los bloques pedagógicos, recreativos y de descanso adaptados a cada edad."
                primaryAction={{ label: "Coordinar visita", href: "mailto:happynanny@mail.com" }}
                secondaryAction={{ label: "Ver servicios", href: "/servicios" }}
                highlights={[
                    "Flexibilidad para ingreso gradual",
                    "Registro diario con aplicaciones familiares",
                    "Extensión horaria disponible hasta las 18:30"
                ]}
            />
        </>
    );
}
