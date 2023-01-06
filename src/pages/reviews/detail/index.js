import { Container, Divider, Stack } from '@mantine/core'
import ProductGeneralInfo from './General'
import ReviewByUsers from './ReviewByUsers'

const ReviewDetail = () => {
  return (
    <Stack>
      <Container>
        <Stack size='lg' mt='md' sx={{ width: '100%' }}>
          <ProductGeneralInfo />
          <Divider />
          <ReviewByUsers />
        </Stack>
      </Container>
    </Stack>
  )
}
export default ReviewDetail
