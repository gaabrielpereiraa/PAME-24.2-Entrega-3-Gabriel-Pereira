import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '../context/UserContext';
import Sidebar from "../components/sidebar";
import UserInitializer from "../components/UserInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popfit",
  description: "Marketplace de pirulitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-white"><UserProvider>
            <Sidebar></Sidebar>
            <UserInitializer />
            {children}
          </UserProvider></div>
        </body>
    </html>
  );
}
