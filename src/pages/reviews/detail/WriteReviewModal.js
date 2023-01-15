import {
  Divider,
  Modal,
  Rating,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { TxButton } from '../../../substrate-lib/components'

const WriteReviewModal = ({
  opened = false,
  onClose,
  productName = 'Web3',
}) => {
  const [status, setStatus] = useState(null)
  const form = useForm({
    initialValues: {
      rating: 0,
      title: '',
      like: '',
      dislike: '',
      transactionPerformance: 0,
      cost: 0,
    },
  })

  useEffect(() => {
    if (status?.includes('Finalized')) {
      showNotification({
        title: <>Review success</>,
        message: '+10 Token has been deposited to your wallet. Check it out!',
      })
      onClose()
    }
  }, [status])

  const loading = !!status && !status?.includes('Finalized')
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size='xl'
      title='Your review'
      transition='fade'
      transitionDuration={600}
      transitionTimingFunction='ease'
    >
      <form onSubmit={form.onSubmit(values => console.log('values', values))}>
        <Stack spacing={'xl'}>
          <Text weight={500} size='xl'>
            {productName}
          </Text>
          <Divider />

          <Text weight={500}>
            How likely is it that you would recommend this product to a friend
            or a colleague?{' '}
            <Text span color='red'>
              *
            </Text>
          </Text>
          <Rating size='xl' name='rating' {...form.getInputProps('rating')} />
          <TextInput
            name='title'
            label='Title for your review'
            required
            {...form.getInputProps('title')}
          />
          <Textarea
            name='like'
            label='What do you like best?'
            required
            {...form.getInputProps('like')}
          />
          <Textarea
            name='dislike'
            label='What do you dislike?'
            required
            {...form.getInputProps('dislike')}
          />

          <Text weight={500}>
            Rate the transaction performance
            <Text span color='red'>
              *
            </Text>
          </Text>
          <Rating size='xl' {...form.getInputProps('transactionPerformance')} />
          <Text weight={500}>
            Rate the cost efficiency
            <Text span color='red'>
              *
            </Text>
          </Text>
          <Rating size='xl' {...form.getInputProps('cost')} />

          <TxButton
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'reviewModule',
              callable: 'createReview',
              interxType: 'EXTRINSIC',
              inputParams: [
                {
                  type: 'u32',
                  value: form.values.rating.toString(),
                },
                {
                  type: 'H256',
                  value: productName,
                },
                {
                  type: 'Bytes',
                  value: form.values.title,
                },
                {
                  type: 'Bytes',
                  value: form.values.like,
                },
                {
                  type: 'Bytes',
                  value: form.values.dislike,
                },
              ],
              paramFields: [
                {
                  name: 'star',
                  type: 'u32',
                  optional: false,
                },
                {
                  name: 'appId',
                  type: 'H256',
                  optional: false,
                },
                {
                  name: 'title',
                  type: 'Bytes',
                  optional: false,
                },
                {
                  name: 'cons',
                  type: 'Bytes',
                  optional: false,
                },
                {
                  name: 'pros',
                  type: 'Bytes',
                  optional: false,
                },
              ],
            }}
            label='Submit'
            loading={loading}
          />
        </Stack>
      </form>
    </Modal>
  )
}
export default WriteReviewModal
