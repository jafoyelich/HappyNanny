"use client";

import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export type PricePlan = {
    name: string;
    price: string;
    description: string;
    features: string[];
    featured?: boolean;
};

type PriceTableProps = {
    plans: PricePlan[];
};

export default function PriceTable({ plans }: PriceTableProps) {
    return (
        <Grid container spacing={3} component="section" aria-label="Tabla de precios">
            {plans.map((plan) => (
                <Grid key={plan.name} size={{ xs: 12, md: 4 }}>
                    <Card
                        variant="outlined"
                        component="article"
                        sx={{
                            height: "100%",
                            borderWidth: 2,
                            borderColor: plan.featured ? "primary.main" : "transparent",
                            background: plan.featured
                                ? "linear-gradient(180deg, rgba(247, 191, 196, 0.55) 0%, rgba(255, 255, 255, 0.95) 100%)"
                                : "linear-gradient(180deg, rgba(238, 247, 255, 0.4) 0%, rgba(255, 255, 255, 0.95) 100%)",
                            boxShadow: plan.featured ? "0 25px 50px rgba(247, 191, 196, 0.3)" : "none",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <CardContent sx={{ py: 4, px: 3 }}>
                            <Stack spacing={2.5}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Box>
                                        <Typography component="h3" variant="h6">
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {plan.description}
                                        </Typography>
                                    </Box>
                                    {plan.featured && (
                                        <Chip
                                            label="Recomendado"
                                            color="primary"
                                            size="small"
                                            sx={{ fontWeight: 600 }}
                                            aria-label="Plan recomendado"
                                        />
                                    )}
                                </Stack>
                                <Typography component="p" variant="h3" sx={{ fontWeight: 700 }}>
                                    {plan.price}
                                </Typography>
                                <List dense sx={{ mt: 1 }}>
                                    {plan.features.map((feature) => (
                                        <ListItem key={feature} sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 32 }}>
                                                <CheckCircleIcon color="success" fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
