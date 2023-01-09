import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  Paper,
  Rating,
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

const ReviewCard = ({ id, hash, name, owner, star = 0, symbol, createdAt }) => {
  const { classes } = useStyles()

  const linkToDetail = `/reviews/${hash}`
  return (
    <Card withBorder radius='md' className={classes.card}>
      <Card.Section px='md'>
        <Group position='apart' mt='md'>
          <Group>
            <Paper shadow='md' p='sm' withBorder>
              <Image
                src='https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png'
                alt={symbol}
                width={100}
                height={100}
              />
            </Paper>
            <div>
              <Text weight={500} component='a' href={linkToDetail}>
                {name}
              </Text>
              <Text size='xs' color='dimmed'>
                Your best financial application
              </Text>
            </div>
          </Group>
          <Badge variant='outline'>Ethereum-compatible</Badge>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section} mt='md'>
        <ReviewCardDescription />
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30} position='apart'>
          <div>
            <Rating value={star} readOnly />
          </div>

          <Button
            radius='xl'
            style={{ flex: 1, maxWidth: 200 }}
            component='a'
            href={linkToDetail}
          >
            Try it now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default ReviewCard
