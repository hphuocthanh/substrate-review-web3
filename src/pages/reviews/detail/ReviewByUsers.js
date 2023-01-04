import { Button, Divider, Stack } from '@mantine/core'
import { useState } from 'react'
import WriteReviewModal from './WriteReviewModal'

const ReviewByUsers = () => {
  const [opened, setOpened] = useState(false)
  return (
    <Stack>
      <div>reviews</div>
      <Divider />

      <Button onClick={() => setOpened(true)}>Write a review</Button>
      <WriteReviewModal
        opened={opened}
        onClose={() => setOpened(false)}
        productName='Web3'
      />
    </Stack>
  )
}
export default ReviewByUsers
