import type { Metadata } from "next";
import "./globals.css";
import NavBar from '@/app/NavBar'
import SideNavBar from "./SideNavBar";

export const metadata: Metadata = {
  title: "Chattr",
  description: "Personal project inspired by Reddit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="flex">
            <SideNavBar/>
            <div className="flex justify-center items-center w-full">
              {children}
            </div>
            
        </div>
        
      </body>
    </html>
  );
}
