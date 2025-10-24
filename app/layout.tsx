import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Footer, NavBar, ThemeRegistry } from "@/components";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap"
});

export const metadata: Metadata = {
    metadataBase: new URL("https://happynannys.example.com"),
    title: {
        default: "HappyNannys | Jardín infantil con enfoque integral",
        template: "%s | HappyNannys"
    },
    description:
        "HappyNannys entrega experiencias educativas amorosas para la primera infancia, con enfoque integral y familia-participativa.",
    keywords: ["jardín infantil", "educación inicial", "happynannys", "primera infancia"],
    manifest: "/manifest.json",
    themeColor: "#F7BFC4",
    openGraph: {
        title: "HappyNannys | Jardín infantil con enfoque integral",
        description:
            "Descubre HappyNannys, un espacio seguro y creativo para las niñas y niños en etapa preescolar.",
        type: "website",
        locale: "es_CL",
        url: "https://happynannys.example.com",
        siteName: "HappyNannys",
        images: [
            {
                url: "/icons/icon-512x512.svg",
                width: 512,
                height: 512,
                alt: "Logotipo HappyNannys"
            }
        ]
    },
    icons: {
        icon: "/icons/icon-192x192.svg",
        apple: "/icons/icon-192x192.svg"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className={montserrat.variable}>
        <ThemeRegistry>
            <NavBar />
            <main role="main" className="px-4 md:px-0">
                {children}
            </main>
            <Footer />
        </ThemeRegistry>
        </body>
        </html>
    );
}
