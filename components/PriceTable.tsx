"use client";

import {
    Box,
    Card,
    CardContent,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
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
                <Grid item xs={12} md={4} key={plan.name}>
                    <Card
                        variant="outlined"
                        component="article"
                        sx={{
                            height: "100%",
                            borderWidth: 2,
                            borderColor: plan.featured ? "primary.main" : "divider",
                            boxShadow: plan.featured ? 6 : 0,
                            position: "relative"
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography component="h3" variant="h6">
                                    {plan.name}
                                </Typography>
                                {plan.featured && (
                                    <Chip label="Recomendado" color="primary" size="small" sx={{ fontWeight: 600 }} />
                                )}
                            </Box>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ my: 1.5 }}>
                                {plan.description}
                            </Typography>
                            <Typography component="p" variant="h4" sx={{ fontWeight: 700 }}>
                                {plan.price}
                            </Typography>
                            <List dense sx={{ mt: 2 }}>
                                {plan.features.map((feature) => (
                                    <ListItem key={feature} sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                            <CheckCircleIcon color="success" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={feature} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
