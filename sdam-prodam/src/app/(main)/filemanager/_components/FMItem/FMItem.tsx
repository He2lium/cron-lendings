import IconContainedFolder from '@/shared/icons/contained-folder.svg';
import IconEmptyFolder from '@/shared/icons/empty-folder.svg';
import { cropTextAtMiddle } from '@/shared/utils/truncateTextAtMiddle';
import { Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
  isEmpty?: boolean;
  file?: {
    url: string;
    ext: string;
  };
}

export const FMItem: FC<Props> = ({ title, isEmpty, file }) => {
  const a = 1;

  return (
    <Stack
      gap={5}
      align='center'
      className={styles.folder}
      onContextMenu={(e) => {
        e.preventDefault();
        alert('File menu');
      }}
    >
      {!file && (
        <Image
          width={80}
          height={65}
          alt=''
          src={isEmpty ? IconContainedFolder : IconEmptyFolder}
        />
      )}
      <Text ta='center' fz={'0.85rem'} lh={'1rem'}>
        {cropTextAtMiddle(title, 10, 5)}
      </Text>
    </Stack>
  );
};
