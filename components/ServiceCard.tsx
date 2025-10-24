"use client";

import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

export type ServiceCardProps = {
    title: string;
    description: string;
    highlights?: string[];
};

export default function ServiceCard({ title, description, highlights = [] }: ServiceCardProps) {
    const initials = title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <Card
            component="article"
            variant="outlined"
            sx={{
                height: "100%",
                borderColor: "transparent",
                background:
                    "linear-gradient(180deg, rgba(252, 227, 230, 0.45) 0%, rgba(255, 255, 255, 0.9) 100%)",
                px: 1,
                py: 1.5
            }}
            role="group"
            aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
        >
            <CardContent>
                <Stack spacing={3}>
                    <Stack spacing={2}>
                        <Box
                            sx={{
                                width: 56,
                                height: 56,
                                borderRadius: "50%",
                                display: "grid",
                                placeItems: "center",
                                background: "linear-gradient(135deg, #F7BFC4 0%, #FCE3E6 100%)",
                                color: "primary.contrastText",
                                fontWeight: 700,
                                fontSize: 18,
                                alignSelf: "flex-start"
                            }}
                            aria-hidden
                        >
                            {initials}
                        </Box>
                        <Stack spacing={1}>
                            <Typography
                                id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
                                variant="h6"
                                component="h3"
                            >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </Stack>
                    </Stack>
                    {highlights.length > 0 && (
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            gap={1}
                            aria-label="Características destacadas"
                        >
                            {highlights.map((item) => (
                                <Chip
                                    key={item}
                                    label={item}
                                    color="secondary"
                                    variant="filled"
                                    sx={{ fontWeight: 600, color: "#1a2930" }}
                                />
                            ))}
                        </Stack>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
