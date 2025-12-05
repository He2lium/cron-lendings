import { AuthProvider } from '@/providers/AuthProvider';
import { Footer, Header } from '@/widgets';
import { AccountSidebar } from '@/widgets/account-sidebar/AccountSidebar';
import { Box, Container, Group } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <Header />
        <Box mt={'5rem'}>
          <Container size={1200}>
            <Group gap={'1.25rem'} justify='space-between' align='flex-start'>
              <AccountSidebar />
              <div className={styles.content}>{children}</div>
            </Group>
          </Container>
        </Box>
        <Footer />
      </AuthProvider>
    </>
  );
}
