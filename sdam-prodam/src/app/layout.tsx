import { createTheme, MantineProvider, Stack } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { Rubik } from 'next/font/google';
import './globals.css';

const theme = createTheme({
  headings: {
    sizes: {
      h1: {
        fontSize: '5rem',
        lineHeight: '6rem',
      },
      h2: {
        fontSize: '3.7rem',
        lineHeight: '4rem',
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
    },
  },
  // breakpoints: {
  //   xs: '325px',
  //   sm: '640px',
  //   md: '768px',
  //   lg: '1024px',
  //   xl: '1200px',
  // },
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '18px',
    xl: '32px',
    xxl: '50px',
  },
});

const rubikSans = Rubik({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'СдамПродам',
  description: 'Недвижимость в Москве',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubikSans.className} antialiased box-border m-0 p-0`}>
        <MantineProvider theme={theme}>
          <Stack h='100%' gap={0}>
            {children}
          </Stack>
          <Notifications />
        </MantineProvider>
      </body>
    </html>
  );
}
