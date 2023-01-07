import { Button, Divider, Stack } from '@mantine/core'
import sha256 from 'crypto-js/sha256'
import { useCallback, useEffect, useState } from 'react'
import { useSubstrateState } from '../../../substrate-lib'
import WriteReviewModal from './WriteReviewModal'

const ReviewByUsers = ({ productName }) => {
  const [opened, setOpened] = useState(false)
  const { api } = useSubstrateState()
  const [reviews, setReviews] = useState(null)

  const callApi = useCallback(async () => {
    await api.query.reviewModule.reviewsOwnedByApp(
      sha256(productName).toString(),
      result => (result.isNone ? setReviews([]) : setReviews(reviews))
    )
  }, [api])

  useEffect(() => {
    callApi()
  }, [callApi])

  console.log('reviews', reviews)

  return (
    <Stack sx={{ width: '100%' }}>
      <div>{reviews}</div>
      <Divider />

      <Button onClick={() => setOpened(true)}>Write a review</Button>
      <WriteReviewModal
        opened={opened}
        onClose={() => {
          setOpened(false)
          callApi()
        }}
        productName='Acala Network'
      />
    </Stack>
  )
}
export default ReviewByUsers
