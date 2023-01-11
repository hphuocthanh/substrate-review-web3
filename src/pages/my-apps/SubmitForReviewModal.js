import { Modal, Stack, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { TxButton } from '../../substrate-lib/components'

const SubmitForReviewModal = ({ opened = false, onClose }) => {
  const [status, setStatus] = useState(null)
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      website: '',
    },
  })

  useEffect(() => {
    if (status?.includes('Finalized')) {
      showNotification({
        title: <>Submit success</>,
        message: 'Please wait for our staff to verify it',
      })
      onClose({ ...form.values })
    }
  }, [status])

  const loading = !!status && !status?.includes('Finalized')

  return (
    <Modal
      opened={opened}
      centered
      size='xl'
      title='Submit for review'
      transition='fade'
      transitionDuration={600}
      transitionTimingFunction='ease'
    >
      <form onSubmit={form.onSubmit(values => console.log('values', values))}>
        <Stack spacing={'xl'}>
          <TextInput
            name='title'
            label='Name of your project'
            required
            {...form.getInputProps('name')}
          />
          <Textarea
            name='description'
            label='Describe your project'
            required
            {...form.getInputProps('description')}
          />

          <TextInput
            name='website'
            label='Website of your project'
            required
            {...form.getInputProps('website')}
          />

          <TxButton
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'palletApps',
              callable: 'createApp',
              interxType: 'EXTRINSIC',
              inputParams: [
                {
                  type: 'Bytes',
                  value: form.values.name,
                },
                {
                  type: 'Bytes',
                  value: form.values.name,
                },
              ],
              paramFields: [
                {
                  name: 'name',
                  type: 'Bytes',
                  optional: false,
                },
                {
                  name: 'symbol',
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
export default SubmitForReviewModal
