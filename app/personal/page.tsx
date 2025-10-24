import { Metadata } from "next";
import { Container, Grid, Stack, Typography } from "@mui/material";
import StaffCard from "@/components/StaffCard";

export const metadata: Metadata = {
    title: "Personal",
    description: "Conoce al equipo multidisciplinario que acompaña cada aprendizaje en Happy Nannys."
};

const staffMembers = [
    {
        name: "Camila Rivas",
        role: "Directora Pedagógica",
        description:
            "Educadora de párvulos con 12 años de experiencia. Especialista en neuroeducación y liderazgo pedagógico."
    },
    {
        name: "Felipe Andrade",
        role: "Psicopedagogo",
        description:
            "Diseña apoyos personalizados y coordina evaluaciones de desarrollo en conjunto con las familias."
    },
    {
        name: "María José Pérez",
        role: "Educadora Sala Cuna",
        description:
            "Promueve experiencias sensoriales y rutinas afectivas para acompañar la primera infancia."
    },
    {
        name: "Andrea Rojas",
        role: "Fonoaudióloga",
        description:
            "Implementa estrategias lúdicas para ampliar vocabulario, lenguaje narrativo y habilidades socioemocionales."
    }
];

export default function PersonalPage() {
    return (
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Stack spacing={3} sx={{ mb: 6 }}>
                <Typography component="h1" variant="h3">
                    Un equipo comprometido con el bienestar
                </Typography>
                <Typography variant="body1" color="text.secondary" maxWidth="md">
                    Profesionales certificados, con formación constante en metodologías activas, crianza
                    respetuosa y primeros auxilios.
                </Typography>
            </Stack>
            <Grid container spacing={3}>
                {staffMembers.map((member) => (
                    <Grid item xs={12} md={3} key={member.name}>
                        <StaffCard {...member} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
