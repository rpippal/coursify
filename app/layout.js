import "./globals.css";
import { Poppins } from "next/font/google";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Footer from "@/components/Footer";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black `}>
      <body className="min-h-screen w-full overflow-x-hidden text-white m-0">
        <Providers>
          <BackgroundWrapper>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </BackgroundWrapper>
        </Providers>
      </body>
    </html>
  )
}
