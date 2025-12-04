import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LoveRestored.AI",
  description: "Because Every Relationship Deserves the Best Support.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased bg-[#181818] w-full overflow-x-hidden`}>
        <main className="text-white sm:pt-7 w-full flex flex-col items-center">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
