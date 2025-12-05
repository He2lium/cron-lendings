'use client';

import { FloatingIndicator, Tabs as MTabs } from '@mantine/core';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  tabs: {
    id: string;
    label: ReactNode;
    content?: FC;
    count?: number;
  }[];
  noContent?: boolean;
  bordered?: boolean;
  onChange?: (v: string | null) => void;
}

export const Tabs: FC<Props> = ({ tabs, noContent, bordered, onChange }) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>(tabs[0].id);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  const handleChange = (v: string | null) => {
    setValue(v);
    onChange?.(v);
  };

  return (
    <MTabs variant='none' value={value} onChange={handleChange}>
      <MTabs.List
        ref={setRootRef}
        className={cn(styles.list, { [styles.bordered]: bordered })}
        grow
      >
        {tabs.map((tab) => (
          <MTabs.Tab
            key={tab.id}
            value={tab.id}
            ref={setControlRef(tab.id)}
            className={styles.tab}
          >
            {tab.label}
          </MTabs.Tab>
        ))}

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={styles.indicator}
        />
      </MTabs.List>

      {!noContent &&
        tabs.map(({ id, content: Content }) => (
          <MTabs.Panel key={id} value={id}>
            {Content && <Content />}
          </MTabs.Panel>
        ))}
    </MTabs>
  );
};
