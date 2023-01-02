import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  Paper,
} from '@mantine/core'

import ReviewCardDescription from './ReviewCardDescription'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}))

const ReviewCard = body => {
  const { classes } = useStyles()

  return (
    <Card withBorder radius='md' className={classes.card}>
      <Card.Section px='md'>
        <Group position='apart' mt='md'>
          <Group>
            <Paper shadow='md' p='sm' withBorder>
              <Image
                src='https://i.imgur.com/ZL52Q2D.png'
                alt='Tesla Model S'
                width={100}
                height={100}
              />
            </Paper>
            <div>
              <Text weight={500}>Tesla Model S</Text>
              <Text size='xs' color='dimmed'>
                Free recharge at any station
              </Text>
            </div>
          </Group>
          <Badge variant='outline'>25% off</Badge>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section} mt='md'>
        <ReviewCardDescription />
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30} position='apart'>
          <div>
            <Text size='xl' weight={700} sx={{ lineHeight: 1 }}>
              $0
            </Text>
            <Text
              size='sm'
              color='dimmed'
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              free
            </Text>
          </div>

          <Button radius='xl' style={{ flex: 1, maxWidth: 200 }}>
            Try it now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default ReviewCard
