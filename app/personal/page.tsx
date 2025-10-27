import { Metadata } from "next";
import { Container, Grid, Stack, Typography } from "@mui/material";
import StaffCard from "@/components/StaffCard";

export const metadata: Metadata = {
    title: "Personal",
    description: "Conoce al equipo multidisciplinario que acompaña cada aprendizaje en Happy Nannys."
};

const staffMembers = [
    {
        photoSrc: "/images/valeria.png",
        name: "Valeria",
        role: "Licenciatura en psicología",
        description:
        "Comprometida con el desarrollo integral de niños y niñas. Me caracterizo por la paciencia, creatividad y responsabilidad en el diseño de actividades pedagógicas que favorecen el aprendizaje significativo",
        horarios: "Mañana - tarde",
        rating: 5
    },
    {
        photoSrc: "/images/Elena.png",
        name: "Elena",
        role: "Educadora",
        description:
            "Soy una educadora entusiasta y comprometida con el desarrollo integral de los niños, apasionada por fomentar aprendizajes significativos y la creatividad",
        horarios: "Mañana",
        rating: 5
    },
    {
        photoSrc: "/images/patricia.png",
        name: "Patricia",
        role: "Licenciatura en pedagogía",
        description:
        "Me caracterizo por ser paciente, proactiva y dedicada a ofrecer un ambiente seguro y estimulante para los niños.",
        horarios: "Tarde - Noche",
        rating: 5
    },
    {
        photoSrc: "/images/selena.png",
        name: "Selena",
        role: "Tecnico en educación parvularia",
        description:
        "Educadora técnica en proceso de formación, con conocimientos en estimulación, hábitos de autonomía y actividades lúdicas.",
        horarios: "Mañana - Tarde",
        rating: 5
    },
    {
        photoSrc: "/images/marianela.png",
        name: "Marianela",
        role: "Tecnico en educación parvularia",
        description:
            "Educadora técnica en proceso de formación, con conocimientos en estimulación, hábitos de autonomía y actividades lúdicas.",
        horarios: "Noche",
        rating: 5
    },
    {
        photoSrc: "/images/alejandra.png",
        name: "alejandra",
        role: "Tecnico en educación parvularia",
        description:
            "Educadora técnica en proceso de formación, con conocimientos en estimulación, hábitos de autonomía y actividades lúdicas.",
        horarios: "Mañana - Tarde",
        rating: 5
    },
    {
        photoSrc: "/images/ximena.png",
        name: "Ximena",
        role: "Tecnico en educación parvularia",
        description:
            "Educadora técnica en proceso de formación, con conocimientos en estimulación, hábitos de autonomía y actividades lúdicas.",
        horarios: "Mañana - Tarde",
        rating: 5
    },

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
