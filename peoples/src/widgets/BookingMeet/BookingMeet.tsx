import { EventEmitter } from '@/shared/utils';
import { Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { BooksForm } from './BookForm';
import { BookSuccess } from './BookSuccess';

export const BookingMeet = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    EventEmitter.on('TOGGLE_BOOKING_MEET', toggle);

    return () => {
      EventEmitter.off('TOGGLE_BOOKING_MEET', toggle);
    };
  }, []);

  return (
    <Drawer.Root opened={opened} onClose={close} size={565} padding={40} position='right'>
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header style={{ alignItems: 'flex-start' }}>
          <Drawer.Title>
            {!sent && (
              <Text fw={700} fz={40} lh={1}>
                Выберите удобную дату встречи
              </Text>
            )}
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body h='calc(100% - 108px)'>
          {!sent ? <BooksForm /> : <BookSuccess />}
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};
