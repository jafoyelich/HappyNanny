"use client";

import { Box, Grid, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

type Action = {
    label: string;
    href: string;
};

type CtaSectionProps = {
    title: string;
    description: string;
    primaryAction: Action;
    secondaryAction?: Action;
    highlights?: string[];
};

export default function CtaSection({
    title,
    description,
    primaryAction,
    secondaryAction,
    highlights = []
}: CtaSectionProps) {
    const renderActionButton = (action: Action, variant: "contained" | "outlined", color: "primary" | "secondary") => {
        const isExternal =
            action.href.startsWith("http") ||
            action.href.startsWith("mailto:") ||
            action.href.startsWith("tel:") ||
            action.href.startsWith("#");

        if (isExternal) {
            return (
                <Button href={action.href} component="a" variant={variant} color={color} size="large">
                    {action.label}
                </Button>
            );
        }

        return (
            <Button component={Link} href={action.href} variant={variant} color={color} size="large">
                {action.label}
            </Button>
        );
    };

    return (
        <Box
            component="section"
            sx={{
                background: "linear-gradient(135deg, rgba(247, 191, 196, 0.55) 0%, rgba(190, 227, 248, 0.45) 100%)",
                py: { xs: 8, md: 10 },
                borderRadius: { xs: 0, md: 10 },
                mx: { xs: -2, md: 0 }
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Stack spacing={2}>
                            <Typography variant="overline" color="text.secondary">
                                Agenda tu visita
                            </Typography>
                            <Typography component="h2" variant="h4">
                                {title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {description}
                            </Typography>
                            {highlights.length > 0 && (
                                <Stack
                                    component="ul"
                                    spacing={1.5}
                                    sx={{
                                        pl: 2,
                                        m: 0,
                                        listStyle: "disc",
                                        "& li": {
                                            display: "list-item"
                                        }
                                    }}
                                >
                                    {highlights.map((item) => (
                                        <Typography component="li" key={item} variant="body2">
                                            {item}
                                        </Typography>
                                    ))}
                                </Stack>
                            )}
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
                            {renderActionButton(primaryAction, "contained", "primary")}
                            {secondaryAction && renderActionButton(secondaryAction, "outlined", "secondary")}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
