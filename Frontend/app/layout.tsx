import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main>
            <Navbar />
            <section className="flex">
              <div className="flex">
                <AppSidebar />
                <SidebarTrigger />
              </div>
              <div>{children}</div>
            </section>
          </main>
        </body>
      </SidebarProvider>
    </html>
  );
}
