import '@/styles/globals.css';
import vazirFont from '@/constants/localFont';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/context/AuthContext';

export const metadata = {
  title: {
    template: ' بلاگ رضا | %s ',
    default: 'بلاگ رضا',
  },
  description: 'وب اپ بلاگ',
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable} font-sans min-h-screen `}>
        <AuthProvider>
          <Header />
          <Toaster />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
