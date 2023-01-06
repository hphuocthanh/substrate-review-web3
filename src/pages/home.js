import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Stack,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    maxWidth: 160,
    maxHeight: 160,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

const Home = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Find <span className={classes.highlight}>useful</span> Web3
              <br /> popular applications
            </Title>
            <Text color='dimmed' mt='md'>
              Genuine and verifiable reviews at your service – Join the hub and
              find the service empowering your business with us
            </Text>

            <List
              mt={30}
              spacing='sm'
              size='sm'
              icon={
                <ThemeIcon size={20} radius='xl'>
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Decentralized</b> – high quality reviews
              </List.Item>
              <List.Item>
                <b>Free</b> – read reviews at your disposal
              </List.Item>
              <List.Item>
                <b>Rewarding</b> – submit a (helpful) review and receive tokens
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius='xl'
                size='md'
                className={classes.control}
                component='a'
                href='/reviews'
              >
                Get started
              </Button>
            </Group>
          </div>
          <Stack sx={{ position: 'relative', flex: 1 }}>
            <Image
              src={'img/unicorn.png'}
              className={classes.image}
              sx={{ position: 'absolute', top: 0, left: 0 }}
            />
            <Image
              src={'img/search.png'}
              className={classes.image}
              sx={{ position: 'absolute', top: '20%', right: 0 }}
            />
            <Image
              src={'img/coin.png'}
              className={classes.image}
              sx={{
                position: 'absolute',
                bottom: '20%',
                left: '40%',
                transform: 'translateX(-50%)',
              }}
            />
          </Stack>
        </div>
      </Container>
    </div>
  )
}
export default Home
