import { Container, Divider, Stack } from '@mantine/core'
import ProductOverview from './product'
import ReviewByUsers from './ReviewByUsers'

const ReviewDetail = () => {
  return (
    <Stack pb='xl'>
      <ProductOverview />
      <Container>
        <Stack size='lg' mt='md' sx={{ width: '100%' }}>
          <Divider />
          <ReviewByUsers />
        </Stack>
      </Container>
    </Stack>
  )
}
export default ReviewDetail
