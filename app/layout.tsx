import { LoaderContextProvider } from "contexts/LoaderContext";
import TanstackProvider from "providers/TanstackProvider";

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
