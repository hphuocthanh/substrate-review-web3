import { useState } from 'react'
import { IconGauge, IconFingerprint, IconActivity } from '@tabler/icons'
import { Box, NavLink } from '@mantine/core'

const data = [
  { icon: IconGauge, label: 'All', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'NFTs',
  },
  { icon: IconActivity, label: 'DeFi' },
]

const Categories = () => {
  const [active, setActive] = useState(0)

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ))

  return <Box>{items}</Box>
}

export default Categories
