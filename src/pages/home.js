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
  Grid,
  Rating,
  Avatar
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
  sectionName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,

  },
  sectionItem: {
    border: '1px solid gray',


  },
  sectionImg: {
    textAlign: 'center',
    margin: '14px 0 14px 56px'
  },
  name: {
    marginLeft: 20,

  }
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

      <Container>
        <Text className={classes.sectionName}>Most Popular Blockchain Software</Text>

        <Grid gutter={25} >
          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Circle</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(2240)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://media.licdn.com/dms/image/D560BAQFONRpP_VBB_g/company-logo_200_200/0/1665523814578?e=2147483647&v=beta&t=PJn9m5FS1YKUpSPxs-pkpo2bNjqeMMQvcsdlJna_6Ko' />
            </div>
          </Grid.Col>
          
          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Evernym, Inc.</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1964)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://www.evernym.com/wp-content/uploads/2019/08/logo-simple-white.jpg' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Chain.io</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1816)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://media.licdn.com/dms/image/D4D0BAQE67CflvspzUQ/company-logo_200_200/0/1666723907130?e=2147483647&v=beta&t=tFZ8qkw0sNz-nh47qa-HIbuiOnCXAcoLbR3oDiEIeL4' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Dfinity</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1870)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://cdn-images-1.medium.com/max/1200/1*yUgN8MYtbqSiNj4olJUcHw.png' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Patientory</Text>
              <Group ml={9}>
                <Rating value={4} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1790)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://media.licdn.com/dms/image/C4E0BAQGoUoLZht9Nbw/company-logo_200_200/0/1520204174018?e=2147483647&v=beta&t=-KfiZeUozVrl8079uzzHbQi6el76lzOEUPeiZxl8umA' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Propy Inc</Text>
              <Group ml={9}>
                <Rating value={4} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1560)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='data:image/png;base64,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' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Slync.io</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1217)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jziwj0jhxxmehslj5itk' />
            </div>
          </Grid.Col>

          <Grid.Col span={3}>
            <div className={classes.sectionItem}>
              <Text fw={600} ml={10}>Kaleido</Text>
              <Group ml={9}>
                <Rating value={4.5} fractions={2} readOnly size='xs' />
                <Text fz={12}>(1184)</Text>
              </Group>
              <Image 
                className={classes.sectionImg}
                width={100}
                height={100}
                src='https://api.kaleido.io/images/kaleido_square_small.png' />
            </div>
          </Grid.Col>

        </Grid>
      </Container>

      <Container mt={80} pb={80}>
        <Text className={classes.sectionName}>Top Reviewers</Text>
        <Grid>
          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://cartoonavatar.com/wp-content/uploads/2022/01/Business-Avatar-On-Circle-Background.png" />
            <Text className={classes.name} mt={10}>James</Text>
            <Rating value={4.5} fractions={2} readOnly size='xs' />
          </Grid.Col>
          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://cartoonavatar.com/wp-content/uploads/2021/12/07-300x300.png" />
            <Text className={classes.name} mt={10}>David</Text>
            <Rating value={4.5} fractions={2} readOnly size='xs' />
          </Grid.Col>

          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9tr33bKOQE2WOVLG-xEzeR3sJuCJOuDFGggE2qh1mNDdcA8nyrlSwPcKxcZtC0-176M&usqp=CAU" />
            <Text className={classes.name} mt={10}>Bob</Text>
            <Rating value={4} fractions={2} readOnly size='xs' />
          </Grid.Col>

          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/1f0e7c35b32ccde83a2ffedcb7a612ae-1665999247/avatar%20cartoon/draw-amazing-cartoon-avatar-for-you-in-12-hour.png" />
            <Text className={classes.name} mt={10}>John</Text>
            <Rating value={4} fractions={2} readOnly size='xs' />
          </Grid.Col>

          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://avatoon.net/wp-content/uploads/2020/04/Gary-Avatar.png" />
            <Text className={classes.name} mt={10}>Philip</Text>
            <Rating value={3.5} fractions={2} readOnly size='xs' />
          </Grid.Col>

          <Grid.Col span={2} >
            <Avatar radius="xl" size="xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7eG7PA0nkjy6Td5c_FGlXOLUMETFOrp2Ww&usqp=CAU" />
            <Text className={classes.name} mt={10}>Tommy</Text>
            <Rating value={3.5} fractions={2} readOnly size='xs' />
          </Grid.Col>
        </Grid>
      </Container>

    </div>
  )
}
export default Home
