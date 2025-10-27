"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { FormEvent, useState } from "react";

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
}

type FormState = {
    parentName: string;
    email: string;
    phone: string;
    childName: string;
    childAge: string;
    notes: string;
};

const defaultState: FormState = {
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    notes: ""
};

export function LoginDialog({ open, onClose }: LoginDialogProps) {
    const [formState, setFormState] = useState<FormState>(defaultState);

    const handleClose = () => {
        setFormState(defaultState);
        onClose();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // En un escenario real se enviaría la data al backend.
        console.info("Solicitud de acceso:", formState);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle component="div" sx={{ pr: 5 }}>
                    <Typography variant="h5" fontWeight={700}>
                        Accede a tu cuenta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Completa tus datos y los de tu hija o hijo para continuar con la inscripción.
                    </Typography>
                </DialogTitle>
                <IconButton
                    onClick={handleClose}
                    aria-label="Cerrar formulario"
                    sx={{ position: "absolute", top: 12, right: 12 }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Stack spacing={3}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Datos de la cuenta
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Usa tu información de contacto para que podamos darte seguimiento.
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField
                                label="Nombre de madre/padre o tutor"
                                value={formState.parentName}
                                onChange={(event) => setFormState((prev) => ({ ...prev, parentName: event.target.value }))}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Correo electrónico"
                                type="email"
                                value={formState.email}
                                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Teléfono de contacto"
                                value={formState.phone}
                                onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
                                required
                                fullWidth
                            />
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Datos del hijo o hija
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Estos datos nos ayudan a personalizar el cuidado y atención.
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField
                                label="Nombre del niño o niña"
                                value={formState.childName}
                                onChange={(event) => setFormState((prev) => ({ ...prev, childName: event.target.value }))}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Edad"
                                value={formState.childAge}
                                onChange={(event) => setFormState((prev) => ({ ...prev, childAge: event.target.value }))}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Notas médicas / alergias"
                                value={formState.notes}
                                onChange={(event) => setFormState((prev) => ({ ...prev, notes: event.target.value }))}
                                multiline
                                minRows={3}
                                fullWidth
                            />
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ px: 3, py: 2.5 }}>
                    <Button onClick={handleClose} color="inherit">
                        Cancelar
                    </Button>
                    <Button type="submit" variant="contained">
                        Acceder
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
