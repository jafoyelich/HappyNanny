"use client";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export type ScheduleEntry = {
    turn: string;
    hour: string;
    modality: string;
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
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="col">
                            Turno
                        </TableCell>
                        <TableCell component="th" scope="col">
                            Horario
                        </TableCell>
                        <TableCell component="th" scope="col">
                            Modalidad
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry) => (
                        <TableRow
                            sx={{
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "rgba(252, 227, 230, 0.2)"
                                }
                            }}
                        >
                            <TableCell sx={{ fontWeight: 500 }}>{entry.turn} </TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{entry.hour}</TableCell>
                            <TableCell  sx={{ fontWeight: 500}}>{entry.modality}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
