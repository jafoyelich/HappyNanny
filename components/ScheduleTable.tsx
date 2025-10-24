"use client";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export type ScheduleEntry = {
    day: string;
    morning: string;
    afternoon: string;
};

type ScheduleTableProps = {
    entries: ScheduleEntry[];
};

export default function ScheduleTable({ entries }: ScheduleTableProps) {
    return (
        <TableContainer
            component={Paper}
            elevation={0}
            variant="outlined"
            sx={{
                borderRadius: 4,
                background:
                    "linear-gradient(180deg, rgba(190, 227, 248, 0.35) 0%, rgba(255, 255, 255, 0.95) 100%)"
            }}
        >
            <Table aria-label="Tabla de horarios" sx={{ minWidth: 360 }}>
                <caption>
                    <Typography variant="body2" color="text.secondary">
                        Todos los horarios incluyen colación saludable y bloques de recreación guiada.
                    </Typography>
                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="col">
                            Día
                        </TableCell>
                        <TableCell component="th" scope="col">
                            Jornada mañana
                        </TableCell>
                        <TableCell component="th" scope="col">
                            Jornada tarde
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry) => (
                        <TableRow
                            key={entry.day}
                            sx={{
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "rgba(252, 227, 230, 0.2)"
                                }
                            }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                                {entry.day}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{entry.morning}</TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{entry.afternoon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
