import { Container } from '@/shared/ui';
import { Box, Button, Flex, Grid, Paper, Text } from '@mantine/core';
import {
  IconClockHour10,
  IconEyeQuestion,
  IconHomeQuestion,
  IconPasswordUser,
} from '@tabler/icons-react';

export const EstateDeals = () => (
  <Box bg='#fbfbfb' pt='7rem' pb='7rem' mt='7rem'>
    <Container>
      <Flex justify='space-between' gap={40}>
        <Flex direction='column' w='32rem' style={{ alignItems: 'flex-start' }}>
          <Text fz='3.7rem' fw='bold' lh={1.2}>
            Сделки с недвижимостью это сложно?
          </Text>
          <Text mt='2rem'>
            Сталкиваетесь с покупкой или продажей недвижимости в первый раз и переживаете?
          </Text>
          <Button radius='xl' fw={400} size='lg' mt='5rem'>
            Консультация
          </Button>
        </Flex>
        <Grid grow gutter={20} w='100%'>
          <Grid.Col span={6}>
            <Paper radius='lg' p={20}>
              <IconEyeQuestion width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold' mt={100} fz={20}>
                Не знаете, <br /> с чего начать?
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius='lg' p={20}>
              <IconPasswordUser width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold' mt={100} fz={20}>
                Боитесь попасть <br />
                на мошенников?
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius='lg' p={20}>
              <IconHomeQuestion width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold' mt={100} fz={20}>
                Не уверены в <br /> «чистоте» квартиры?
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper radius='lg' p={20}>
              <IconClockHour10 width={44} height={44} stroke={1} color='#ffae00' />
              <Text fw='bold' mt={100} fz={20}>
                Столкнулись с бюрократией <br /> и задержками?
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  </Box>
);
