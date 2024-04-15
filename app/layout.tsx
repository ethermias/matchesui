import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import TagBar from "../components/bar/tag";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider";
import { AppWrapper } from "@/components/app-provider";
import { Body } from "@/components/body";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ችቦ",
  description: "Chibo(ችቦ) Multimedia Platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>
            <Header />
             <Body>
                <Toaster />
                <TagBar />
                {children}
            </Body>
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
