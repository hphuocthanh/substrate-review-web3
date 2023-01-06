import { Container, Divider, Grid, Stack, Title } from '@mantine/core'
import Categories from './Categories'
import ReviewCard from './ReviewCard'

const mockData = [
  {
    image:
      'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    category: 'technology',
    title: 'The best laptop for Frontend engineers in 2022',
    date: 'Feb 6th',
    author: {
      name: 'Elsa Brown',
      avatar:
        'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    },
  },
]
const ReviewList = () => {
  return (
    <Stack>
      <Container size='lg' mt='md' sx={{ width: '100%' }}>
        <Title order={2}>Current Projects</Title>
        <Divider my='lg' />

        <Grid grow>
          <Grid.Col span={3}>
            <Categories />
          </Grid.Col>
          <Grid.Col span={9}>
            {mockData?.map(item => (
              <ReviewCard {...item} key={item.title} />
            ))}
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  )
}
export default ReviewList