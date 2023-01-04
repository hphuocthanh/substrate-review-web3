import {
  Button,
  Divider,
  Modal,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'

const WriteReviewModal = ({
  opened = false,
  onClose,
  productName = 'Web3',
}) => {
  const form = useForm({
    initialValues: {
      title: '',
      like: '',
      dislike: '',
      purposes: '',
      org: '',
      orgSize: '',
      industry: '',
      role: '',
      jobTitle: '',
    },
  })

  const handleSubmit = values => {
    console.log('values', values)
  }

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
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing={'xl'}>
          <Text weight={500} size='xl'>
            {productName}
          </Text>
          <Divider />

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

          <Select
            label='For which purpose do you use the product?'
            placeholder='Pick one'
            searchable
            required
            nothingFound='No options'
            data={['Education', 'Personal', 'Business']}
            {...form.getInputProps('purposes')}
          />
          <TextInput
            name='org'
            label='At which organization do you use it?'
            required
            {...form.getInputProps('org')}
          />

          <Select
            label='What was your organization size when using it?'
            placeholder='Pick one'
            searchable
            required
            nothingFound='No options'
            data={['0 - 10', '10 - 50', '50 - 100', '100 - 1000', '1000+']}
            {...form.getInputProps('orgSize')}
          />
          <Select
            label='What was your organization size when using it?'
            placeholder='Pick one'
            searchable
            required
            nothingFound='No options'
            data={[
              'User',
              'Admin',
              'Consultant',
              'Sponsor',
              'Tech Writer',
              'Other',
            ]}
            {...form.getInputProps('role')}
          />
          <TextInput
            name='jobTitle'
            label='What is your current job title?'
            required
            {...form.getInputProps('jobTitle')}
          />

          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </Modal>
  )
}
export default WriteReviewModal
