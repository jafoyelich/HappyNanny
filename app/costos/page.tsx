import { Container, Stack, Typography } from "@mui/material";
import PriceTable, { type PricePlan } from "@/components/PriceTable";
import { CtaSection } from "@/components";


const pricePlans: PricePlan[] = [
    {
        name: "Estimulación temprana",
        price: "20bs./hora",
        description: "Dirigida a niños de 0 a 3 años para fortalecer su desarrollo integral.",
        features: ["Precio por turno 80bs.", "Precio mensual 1200bs.",]
    },
    {
        name: "Acompañamiento educativo",
        price: "25bs./hora",
        description: "Apoyo pedagógico para niños en edad preescolar y escolar",
        features: ["Precio por turno 100bs.", "Precio mensual 1400bs.",]
    },
    {
        name: "Estimulación del lenguaje",
        price: "30bs./hora",
        description: "Ejercicios y juegos para favorecer la comunicación, pronunciación y coordinación corporal",
        features: ["Precio por turno 120bs.", "Precio mensual 1600bs.",]
    },
    {
        name: "Cuidado nocturno",
        price: "30-40bs. /hora",
        description: "Servicio especializado para padres que trabajan o estudian de noche",
        features: ["Precio por turno 100bs.", "Precio mensual 1800bs.",]
    },
    {
        name: "Atención por horas",
        price: "20-25bs. /hora",
        description: "Apoyo pedagógico para niños en edad preescolar y escolar",
        features: ["Horario flexible", "Atención personalizada",],
        featured: true
    }
];

export default function CostosPage() {
    return (
        <>
            <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Stack spacing={3} sx={{ mb: 4 }}>
                    <Typography component="h1" variant="h3">
                        Costos de servicios
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth="md">
                        Los precios pueden variar según la edad del niño, la cantidad de horas, la ubicación del servicio, si incluye alimentación o materiales didácticos.
                    </Typography>
                </Stack>
                <PriceTable plans={pricePlans} />
            </Container>
            <CtaSection
                title="¿Necesitas un plan a tu medida?"
                description="Conversemos sobre tus horarios y requerimientos para adaptar una propuesta personalizada sin costo."
                primaryAction={{ label: "Reservar reunión", href: "/horarios" }}
                secondaryAction={{ label: "Hablar por correo", href: "mailto:happynanny@mail.com" }}
                highlights={[
                    "Evaluación pedagógica y socioemocional inicial",
                    "Opciones de extensión horaria y talleres extra"
                ]}
            />
        </>
    );
}
