import { Tabs } from '@mantine/core'
import { IconBook, IconUsers } from '@tabler/icons'

const ReviewCardDescription = () => {
  return (
    <Tabs defaultValue='overview'>
      <Tabs.List>
        <Tabs.Tab value='overview' icon={<IconBook size={14} />}>
          Overview
        </Tabs.Tab>
        <Tabs.Tab value='satisfaction' icon={<IconUsers size={14} />}>
          User Satisfactions
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='overview' pt='xs'>
        Overview
      </Tabs.Panel>

      <Tabs.Panel value='satisfaction' pt='xs'>
        User Satisfactions
      </Tabs.Panel>
    </Tabs>
  )
}

export default ReviewCardDescription
