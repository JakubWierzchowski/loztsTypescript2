import './globals.css';
import type { Metadata } from 'next';
import Navi from '../components/Navigation/navigationPhase';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from './registry';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from '@/utils/context/AuthContext';
import { Suspense } from 'react';
import Loading from './loading';
import Footer from '@/components/Footer/footer';
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Lozts',
  description: 'Lubelski Okręgowy Związek tenisa Stołowego',
  icons: '/images/header/logo.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <StyledComponentsRegistry>
        <body className={montserrat.className}>
          <UserContextProvider>
            <Suspense fallback={<Loading />}>
              <Navi />
              {children}
              <Footer />
            </Suspense>
          </UserContextProvider>
          <ToastContainer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
