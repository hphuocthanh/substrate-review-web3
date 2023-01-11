import { IconShare } from '@tabler/icons'
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  createStyles,
  Rating,
} from '@mantine/core'

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    img: {
      transition: '250ms ease',
    },
    [`&:hover img`]: {
      transform: 'scale(1.03)',
    },
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}))

const AppCard = ({
  className,
  image,
  link,
  title,
  description,
  rating,
  star,
  ...others
}) => {
  const { classes, cx } = useStyles()
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' }

  return (
    <Card
      withBorder
      radius='md'
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={250} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant='gradient'
        gradient={{ from: 'yellow', to: 'red' }}
      >
        {rating}
      </Badge>

      <Text className={classes.title} weight={500} component='a' {...linkProps}>
        {title}
      </Text>

      <Text size='sm' color='dimmed' lineClamp={4}>
        {description}
      </Text>

      <Group position='apart' className={classes.footer}>
        <Center>
          <Group>
            <Rating value={star} readOnly />
            <Text color='dimmed' size='sm'>
              100 reviews
            </Text>
          </Group>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  )
}

export default AppCard
