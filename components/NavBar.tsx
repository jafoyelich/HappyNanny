"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    Stack,
    SwipeableDrawer,
    Toolbar,
    Typography
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

const links: NavLink[] = [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Horarios", href: "/horarios" },
    { label: "Costos", href: "/costos" },
    { label: "Personal", href: "/personal" }
];

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const activeMap = useMemo(() => {
        const current = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
        return new Set([current]);
    }, [pathname]);

    const renderDesktopLinks = (
        <Stack component="nav" direction="row" spacing={1.5} alignItems="center">
            {links.map((link) => {
                const selected = activeMap.has(link.href);
                return (
                    <Button
                        key={link.href}
                        component={Link}
                        href={link.href}
                        color={selected ? "primary" : "inherit"}
                        variant={selected ? "contained" : "text"}
                        aria-current={selected ? "page" : undefined}
                        sx={{ fontWeight: selected ? 700 : 500 }}
                    >
                        {link.label}
                    </Button>
                );
            })}
        </Stack>
    );

    const renderMobileDrawer = (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            ModalProps={{
                keepMounted: true
            }}
        >
            <Box
                component="nav"
                role="navigation"
                aria-label="Secciones del sitio"
                sx={{ width: 260, p: 2 }}
            >
                <Stack direction="row" justifyContent="flex-end">
                    <IconButton
                        aria-label="Cerrar menú de navegación"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <List>
                    {links.map((link) => {
                        const selected = activeMap.has(link.href);
                        return (
                            <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
                                <Button
                                    fullWidth
                                    component={Link}
                                    href={link.href}
                                    color={selected ? "primary" : "inherit"}
                                    variant={selected ? "contained" : "text"}
                                    aria-current={selected ? "page" : undefined}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Button>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </SwipeableDrawer>
    );

    return (
        <AppBar color="inherit" position="sticky" elevation={0}>
            <Toolbar disableGutters>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        py: 1
                    }}
                >
                    <Box component={Link} href="/" sx={{ textDecoration: "none" }}>
                        <Typography variant="h6" component="span" color="primary">
                            Happy Nannys
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        {renderDesktopLinks}
                    </Box>
                    <IconButton
                        aria-label="Abrir menú de navegación"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "inline-flex", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Container>
            </Toolbar>
            {renderMobileDrawer}
        </AppBar>
    );
}
