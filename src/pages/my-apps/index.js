import {
  Button,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core'
import { useState } from 'react'
import AppCard from './AppCard'
import cards from './cards'
import SubmitForReviewModal from './SubmitForReviewModal'

const MyApps = () => {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false)
  const [apps, setApps] = useState([])
  return (
    <Stack pb='xl'>
      <Container sx={{ width: '100%' }} size='xl'>
        <Group position='apart' my='xl'>
          <Title>Apps</Title>
          <Button onClick={() => setIsSubmitOpen(true)}>
            Submit app for review
          </Button>
        </Group>
        <Divider mb='xl' />

        <SimpleGrid cols={3} pt='lg'>
          {apps?.map(item => (
            <AppCard {...item} key={item.title} />
          ))}
          {cards.map(item => (
            <AppCard {...item} key={item.title} />
          ))}
        </SimpleGrid>
      </Container>
      <SubmitForReviewModal
        opened={isSubmitOpen}
        onClose={({ name, website, description }) => {
          setApps(_apps => [
            {
              image: 'img/nothing.jpg',
              link: website,
              title: name,
              rating: 'new',
              description: description,
              star: 0,
            },
            ..._apps,
          ])
          setIsSubmitOpen(false)
        }}
      />
    </Stack>
  )
}
export default MyApps
