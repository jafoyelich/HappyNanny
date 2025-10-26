import { Metadata } from "next";
import { Container, Grid, Stack, Typography } from "@mui/material";
import StaffCard from "@/components/StaffCard";

export const metadata: Metadata = {
    title: "Personal",
    description: "Conoce al equipo multidisciplinario que acompaña cada aprendizaje en Happy Nannys."
};

const staffMembers = [
    {
        name: "Lic. Ana Pérez",
        role: "Estimulación del lenguaje y motricidad fina",
        description:
            "Educadora con 3 años de experiencia en educación inicial.",
        horarios: "Mañana - tarde",
        rating: 5
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
                    <Grid key={member.name} size={{ xs: 12, md: 3 }}>
                        <StaffCard {...member} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
