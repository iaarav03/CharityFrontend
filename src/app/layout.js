import { Inter,Roboto_Mono,Permanent_Marker} from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  
})
const marker = Permanent_Marker({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-permanent-marker',
  weight:'400'
})

export const metadata = {
  title: "Yogdaan",
  
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${marker.variable}`}>
      <body  className="bg-white">
      <div>
    

      
     <Navbar />
   
   
     {children}
     <Footer/>
    
</div>
       
    
     
      
      </body>
    </html>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"
          />
          </>
  );
}
