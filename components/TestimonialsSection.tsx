"use client";

import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Rating,
    Stack,
    Typography
} from "@mui/material";

type Testimonial = {
    name: string;
    quote: string;
    role: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        name: "Familia Rojas",
        role: "Estimulación temprana",
        quote:
            "La adaptación fue suave y llena de cariño. Recibimos reportes diarios y vemos a nuestro hijo feliz cada día.",
        rating: 5
    },
    {
        name: "Familia Suárez",
        role: "Acompañamiento en actividades Educativas",
        quote:
            "Las actividades combinan arte, música y movimiento. El acompañamiento del equipo ha sido clave en casa.",
        rating: 5
    },
    {
        name: "Familia Campos",
        role: "Estimulación del lenguaje",
        quote:
            "Agradecemos la flexibilidad y la comunicación constante. Sentimos que somos parte activa del proceso.",
        rating: 4.5
    }
];

export default function TestimonialsSection() {
    return (
        <Stack component="section" spacing={4} sx={{ py: { xs: 8, md: 10 } }}>
            <Stack spacing={1.5} textAlign="center" sx={{ px: { xs: 2, md: 8 } }}>
                <Typography variant="h4">Historias de familias felices</Typography>
                <Typography variant="body1" color="text.secondary">
                    Creamos vínculos cercanos con cada hogar. Estas son algunas experiencias que nos inspiran.
                </Typography>
            </Stack>
            <Grid container spacing={3}>
                {testimonials.map((testimonial) => (
                    <Grid key={testimonial.name} size={{ xs: 12, md: 4 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: "100%",
                                borderColor: "transparent",
                                background:
                                    "linear-gradient(180deg, rgba(190, 227, 248, 0.35) 0%, rgba(255, 255, 255, 0.95) 100%)",
                                px: 1,
                                py: 1.5
                            }}
                        >
                            <CardContent>
                                <Stack spacing={3}>
                                    <Rating
                                        value={testimonial.rating}
                                        precision={0.5}
                                        readOnly
                                        aria-label={`Puntuación ${testimonial.rating} de 5`}
                                    />
                                    <Typography variant="body1" color="text.primary">
                                        “{testimonial.quote}”
                                    </Typography>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
                                            {testimonial.name[0]}
                                        </Avatar>
                                        <Stack spacing={0.5}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {testimonial.role}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
