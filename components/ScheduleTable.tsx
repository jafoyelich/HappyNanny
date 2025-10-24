"use client";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

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
        <TableContainer component={Paper} elevation={0} variant="outlined" sx={{ borderRadius: 4 }}>
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
                        <TableRow key={entry.day}>
                            <TableCell component="th" scope="row">
                                {entry.day}
                            </TableCell>
                            <TableCell>{entry.morning}</TableCell>
                            <TableCell>{entry.afternoon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
