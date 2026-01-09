'use client';
import { MainSidebar } from '@/widgets/main-sidebar/MainSidebar';
import { Box, Button, Container, Group, Modal, Stack, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconFileTypeDoc,
  IconPhotoScan,
  IconPlus,
  IconStack2,
  IconTrash,
  IconUpload,
} from '@tabler/icons-react';
import { FMItem } from './_components/FMItem/FMItem';

export default function FileManagerPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box mt={'2rem'} mb={'2rem'}>
        <Container size={1200}>
          <Group gap={'1.25rem'} justify='space-between' align='flex-start'>
            <MainSidebar
              title='Диск'
              links={[
                {
                  href: '',
                  label: 'Все файлы',
                  leftSection: <IconStack2 stroke={1} />,
                  active: true,
                },
                {
                  href: '',
                  label: 'Фото',
                  leftSection: <IconPhotoScan stroke={1} />,
                  active: true,
                },
                {
                  href: '',
                  label: 'Документы',
                  leftSection: <IconFileTypeDoc stroke={1} />,
                  active: true,
                },
                {
                  href: '',
                  label: 'Корзина',
                  leftSection: <IconTrash stroke={1} />,
                  active: true,
                },
              ]}
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
                    onClick={open}
                  >
                    Создать папку
                  </Button>
                </Stack>
              }
            />
            <Box flex={1}>
              <Group gap={'auto'}>
                <FMItem title='Длинное название папки' />
                <FMItem title='название папки' />
                <FMItem title='название папки' />
              </Group>
            </Box>
          </Group>
        </Container>
        <Modal
          opened={opened}
          onClose={close}
          title='Укажите название папки'
          radius={'lg'}
        >
          <form action='#'>
            <TextInput placeholder='Название папки' radius={'xl'} />
            <Group mt={'1rem'}>
              <Button variant='light' color='gray' radius='lg' flex={1}>
                Отмена
              </Button>
              <Button radius='lg' flex={1}>
                Сохранить
              </Button>
            </Group>
          </form>
        </Modal>
      </Box>
    </>
  );
}
