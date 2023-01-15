import { Group, RingProgress, Tabs, Text } from '@mantine/core'
import { IconBook, IconUsers } from '@tabler/icons'

const ReviewCardDescription = ({
  overview = 'Overview',
  overall = 10,
  security = 9,
  transaction = 8,
}) => {
  return (
    <Tabs defaultValue='overview'>
      <Tabs.List>
        <Tabs.Tab value='overview' icon={<IconBook size={14} />}>
          Overview
        </Tabs.Tab>
        <Tabs.Tab value='satisfaction' icon={<IconUsers size={14} />}>
          User Satisfaction
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='overview' pt='xs'>
        {overview}
      </Tabs.Panel>

      <Tabs.Panel value='satisfaction' pt='xs'>
        <Group position='apart' align='center'>
          <Group align='center'>
            <Text weight={500}>Overall</Text>
            <RingProgress
              sections={[{ value: overall * 10, color: 'blue' }]}
              size={100}
              label={
                <Text color='blue' weight={700} align='center' size='lg'>
                  {overall}
                </Text>
              }
            />
          </Group>
          <Group align='center'>
            <Text weight={500}>Security</Text>
            <RingProgress
              sections={[{ value: security * 10, color: 'blue' }]}
              size={100}
              label={
                <Text color='blue' weight={700} align='center' size='lg'>
                  {security}
                </Text>
              }
            />
          </Group>
          <Group align='center'>
            <Text weight={500}>Transaction speed</Text>
            <RingProgress
              sections={[{ value: transaction * 10, color: 'blue' }]}
              size={100}
              label={
                <Text color='blue' weight={700} align='center' size='lg'>
                  {transaction}
                </Text>
              }
            />
          </Group>
        </Group>
      </Tabs.Panel>
    </Tabs>
  )
}

export default ReviewCardDescription
