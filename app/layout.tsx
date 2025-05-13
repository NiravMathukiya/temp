import { Inter } from "next/font/google";
import { ReduxProviders } from "../store/ReduxProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Communication Request Portal",
  description: "Regional Communication Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  );
}

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Communication Request Portal',
//   description: 'Regional Communication Portal',
// };
// export default function RootLayout({ children }) {
//   return (

//     <html lang="en">

//       <body className={inter.className}>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }
