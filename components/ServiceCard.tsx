"use client";

import { Card, CardContent, CardHeader, Chip, Stack, Typography } from "@mui/material";

export type ServiceCardProps = {
    title: string;
    description: string;
    highlights?: string[];
};

export default function ServiceCard({ title, description, highlights = [] }: ServiceCardProps) {
    return (
        <Card
            component="article"
            variant="outlined"
            sx={{ height: "100%", borderColor: "divider", borderWidth: 2 }}
            role="group"
            aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
        >
            <CardHeader
                title={
                    <Typography id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`} variant="h6">
                        {title}
                    </Typography>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                </Typography>
                {highlights.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1} aria-label="Características destacadas">
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
            </CardContent>
        </Card>
    );
}
