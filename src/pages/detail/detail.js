import { createStyles } from '@mantine/core'
import React from 'react'
import { Image, Grid, Text, Rating, Group, Button, Card } from '@mantine/core';
import { FiHeart, FiCheck } from 'react-icons/fi'
import './detail.css'
import DetailCardDescription from './detailCardDescription';

const usethisStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        top: 0,
        left: 0,
        borderBottom: '1px solid gray',
        height: 420,
    },
    bg: {
        position: 'relative',
        top: 0,
        left: 0,
        borderBottom: '1px solid gray',
        objectFit: 'cover',
    },
    logo: {
        position: "absolute",
        top: 210,
        left: 60,
        border: '1px solid gray', 
        backgroundColor: 'white'
    },
    name: {
        marginLeft: 50,
        marginTop: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    control: {
        [theme.fn.smallerThan('xs')]: {
          flex: 1,
        },
    },
    groupbutton: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'end',
    },
    info: {
        margin: '0 60px 20px 60px',
    },
    sections: {
        marginLeft: 60,
        marginRight: 60,

    },

}))

function detail() {
    const { classes } = usethisStyles()
  return (
    <div>
        <div className={classes.container}>
            <Image
                className={classes.bg}
                height={240}
                src="https://acala.network/acala-og-card2.png"
            />
            <Grid >
                <Grid.Col span={2} style={{backgroundColor: ''}}>
                    <Image
                        height={180}
                        width={180}
                        className={classes.logo}
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png"/>
                </Grid.Col>
                <Grid.Col span={3} className={classes.name} style={{backgroundColor: ''}}>
                    <Text className={classes.title}>Acala Network</Text>
                    <Group >
                        <Rating value={4.5} fractions={2} readOnly size="lg"/>
                        <Text fz={14} fw={500} color='#364FC7'>5435 reviews</Text>
                    </Group>
                    <Group>
                        <FiHeart className="heart"/>
                        <Text fz={14} fw={500} style={{marginTop: '10px'}}>Favorite </Text>
                        <Text fz={14} fw={500} style={{marginTop: '10px'}}>|</Text>
                        <FiCheck style={{marginTop: '10px', fontSize: '20px'}}/>
                        <Text fz={14} fw={500} style={{marginTop: '10px'}}>Claimed</Text>
                    </Group>
                    
                </Grid.Col>
                <Grid.Col span={3} offset={3} className={classes.groupbutton} >
                    <Button size='md' variant="outline" className={classes.control}>
                        Contact Acala Network
                    </Button>
                    <Button style={{marginLeft: '10px'}} size='md' className={classes.control}>
                        Try Acala free forever
                    </Button>
                </Grid.Col>
            </Grid>
        </div>
        <Card.Section mt='md' className={classes.info}>
                <DetailCardDescription />
        </Card.Section>

        <div className={classes.info}>
            <Text fz={22} fw={600}>Review</Text>
        </div>
        
    </div>
  )
}

export default detail