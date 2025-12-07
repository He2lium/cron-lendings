import { MainSidebar } from '@/widgets/main-sidebar/MainSidebar';
import { Box, Button, Container, Group, Stack } from '@mantine/core';
import { IconPlus, IconUpload } from '@tabler/icons-react';

export default function FileManagerPage() {
  const a = 1;

  return (
    <Box mt={'2rem'} mb={'2rem'}>
      <Container size={1200}>
        <Group gap={'1.25rem'} justify='space-between' align='flex-start'>
          <MainSidebar
            title='Диск'
            subtitle={
              <Stack gap={5}>
                <Button
                  fw={500}
                  radius={'lg'}
                  leftSection={<IconUpload stroke={1} size={18} />}
                >
                  Загрузить
                </Button>
                <Button
                  fw={500}
                  radius={'lg'}
                  variant='light'
                  leftSection={<IconPlus stroke={1} size={18} />}
                >
                  Создать папку
                </Button>
              </Stack>
            }
          />
          <Box flex={1}>Content</Box>
        </Group>
      </Container>
    </Box>
  );
}
