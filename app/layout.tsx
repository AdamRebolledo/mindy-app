import { LoaderContextProvider } from "contexts/LoaderContext";
import TanstackProvider from "providers/TanstackProvider";
import "../styles/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <body>
    <TanstackProvider>
     <LoaderContextProvider>{children}</LoaderContextProvider>
    </TanstackProvider>
   </body>
  </html>
 );
}
