import { Container, Divider, Grid, Stack, Title } from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'
import { useSubstrateState } from '../../substrate-lib'
import Categories from './Categories'
import ReviewCard from './ReviewCard'

const ReviewList = () => {
  const { api } = useSubstrateState()
  const [apps, setApps] = useState(null)

  const callApi = useCallback(async () => {
    const result = await api.query.palletApps.apps.entries()
    const apps = result.map(([key, exposure]) => {
      return {
        hash: key.args[0].toHuman(),
        ...exposure.toHuman(),
      }
    })
    setApps(apps)
  }, [api])

  useEffect(() => {
    callApi()
  }, [callApi])

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
            {apps?.map(item => (
              <ReviewCard {...item} key={item.hash} />
            ))}
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  )
}
export default ReviewList
