import { Container, Divider, Stack } from '@mantine/core'
import { useParams } from 'react-router-dom'
import ProductOverview from './product'
import ReviewByUsers from './ReviewByUsers'

const ReviewDetail = () => {
  const { reviewId } = useParams()
  return (
    <Stack pb='xl'>
      <ProductOverview />
      <Divider />
      <Container sx={{ width: '100%' }}>
        <Stack size='lg' mt='md' sx={{ width: '100%' }}>
          <ReviewByUsers productName={reviewId} />
        </Stack>
      </Container>
    </Stack>
  )
}
export default ReviewDetail
