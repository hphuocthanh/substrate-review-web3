import { Container, Divider, Grid, Stack, Title } from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'
import { useSubstrateState } from '../../substrate-lib'
import Categories from './Categories'
import ReviewCard from './ReviewCard'
import reviews from './reviews'

const ReviewList = () => {
  const { api } = useSubstrateState()
  const [apps, setApps] = useState(null)

  const callApi = useCallback(async () => {
    const result = await api.query.palletApps.apps.entries()
    const apps = result.map(([key, exposure]) => {
      return {
        hash: key.args[0].toHuman(),
        overall: 10,
        overview: 'A great application on Substrate',
        security: 9,
        transaction: 9,
        ...exposure.toHuman(),
      }
    })
    setApps(apps)
  }, [api])

  useEffect(() => {
    callApi()
  }, [callApi])

  return (
    <Stack pb='xl'>
      <Container size='lg' mt='md' sx={{ width: '100%' }}>
        <Title order={2}>Current Projects</Title>
        <Divider my='lg' />

        <Grid grow>
          <Grid.Col span={3}>
            <Categories />
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack>
              {apps?.map(item => (
                <ReviewCard {...item} key={item.hash} />
              ))}
              {reviews.map(item => (
                <ReviewCard {...item} key={item.hash} />
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  )
}
export default ReviewList
