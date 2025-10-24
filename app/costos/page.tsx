import { Container, Stack, Typography } from "@mui/material";
import PriceTable, { type PricePlan } from "@/components/PriceTable";
import { CtaSection } from "@/components";


const pricePlans: PricePlan[] = [
    {
        name: "Media jornada",
        price: "$210.000 / mes",
        description: "4,5 horas diarias con colación saludable y talleres base.",
        features: ["Ingreso 8:00 o 13:30", "Colación saludable", "Plan pedagógico individual"]
    },
    {
        name: "Jornada completa",
        price: "$290.000 / mes",
        description: "Jornada extendida con alimentación completa y siesta asistida.",
        features: ["Ingreso 8:00", "Almuerzo y once", "Extensión hasta las 18:30"],
        featured: true
    },
    {
        name: "Flex extendido",
        price: "$330.000 / mes",
        description: "Incluye talleres extra y flexibilidad diaria según disponibilidad.",
        features: ["Reservas por app", "Talleres vespertinos", "15 días de flexibilidad al año"]
    }
];

export default function CostosPage() {
    return (
        <>
            <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Stack spacing={3} sx={{ mb: 4 }}>
                    <Typography component="h1" variant="h3">
                        Planes transparentes y flexibles
                    </Typography>
                    <Typography variant="body1" color="text.secondary" maxWidth="md">
                        Matrícula anual $120.000. Descuentos del 15% para hermanos y becas parciales según
                        evaluación socioeconómica. Valores sujetos a actualización anual.
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
                    "Opciones de extensión horaria y talleres extra",
                    "Descuentos corporativos para empresas asociadas"
                ]}
            />
        </>
    );
}
