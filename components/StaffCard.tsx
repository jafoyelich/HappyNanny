"use client";

import { Avatar, Card, CardContent, Rating, Stack, Typography } from "@mui/material";

export type StaffCardProps = {
    name: string;
    role: string;
    description: string;
    photoSrc: string;
    horarios: string;
    rating: number;
};

export default function StaffCard({
                                      name,
                                      role,
                                      description,
                                      photoSrc,
                                      horarios,
                                      rating,
                                  }: StaffCardProps) {
    return (
        <Card
            component="article"
            aria-labelledby={`${name.replace(/\s+/g, "-").toLowerCase()}-card`}
            variant="outlined"
            sx={{ height: "100%", borderColor: "divider", borderWidth: 2 }}
        >
            <CardContent>
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Avatar
                        src={photoSrc}
                        alt={`Retrato de ${name}`}
                        sx={{ width: 96, height: 96, border: "4px solid", borderColor: "primary.main" }}
                    />
                    <Stack spacing={0.5}>
                        <Typography id={`${name.replace(/\s+/g, "-").toLowerCase()}-card`} variant="h6">
                            {name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {role}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{horarios}</Typography>
                    <Rating
                        value={rating}
                        precision={0.5}
                        readOnly
                        aria-label={`Puntuación ${rating} de 5`}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}
