import {
  Avatar,
  Button,
  Card,
  Divider,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'
import { useSubstrateState } from '../../../substrate-lib'
import WriteReviewModal from './WriteReviewModal'

const ReviewByUsers = ({ productName }) => {
  const [opened, setOpened] = useState(false)
  const { api } = useSubstrateState()
  const [reviews, setReviews] = useState(null)

  const callApi = useCallback(async () => {
    let results = await api.query.reviewModule.reviewsOwnedByApp(productName)
    results = results.map(item => item.toString())
    let _reviews = []
    for (const reviewId of results) {
      const review = await api.query.reviewModule.reviews(reviewId)
      _reviews = [..._reviews, review.toHuman()]
    }
    setReviews(_reviews)
  }, [api, productName])

  useEffect(() => {
    callApi()
  }, [callApi])

  return (
    <Stack sx={{ width: '100%' }}>
      <Group position='apart'>
        <Title order={2}>Reviews</Title>
        <Button onClick={() => setOpened(true)}>Write a review</Button>
      </Group>
      <div>
        {reviews?.map(item => (
          <Card withBorder key={item.appId}>
            <Card.Section>
              <Group p='md' position='apart'>
                <Rating value={item.star} readOnly />
                <Group>
                  <Avatar src={null} alt='no image here' />
                  <div style={{ width: 120 }}>
                    <Text truncate>{item.owner}</Text>
                  </div>
                </Group>
              </Group>
            </Card.Section>
            <Stack>
              <Title order={3}>{item.title}</Title>

              <Text weight={500}>What do you like?</Text>
              <Text>{item.pros}</Text>
              <Divider />
              <Text weight={500}>What do you dislike?</Text>
              <Text>{item.cons}</Text>
            </Stack>
          </Card>
        ))}
      </div>

      <WriteReviewModal
        opened={opened}
        onClose={() => {
          setOpened(false)
          setTimeout(callApi, 250)
        }}
        productName={productName}
      />
    </Stack>
  )
}
export default ReviewByUsers
