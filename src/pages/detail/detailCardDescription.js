import { createStyles, Tabs, Text } from '@mantine/core'

const useStyle = createStyles(theme => ({
    tab: {
        fontWeight: 500,
    },
    overview: {
        marginTop: 10,
        border: '1px solid gray',
        fontSize: 15
    },
    content: {
        margin: '10px 30px 10px 30px',
        paddingBottom: 10
    }
}))
const ReviewCardDescription = () => {
    const {classes} = useStyle()
  return (
    <Tabs defaultValue='information'>
      <Tabs.List>
        <Tabs.Tab value='information' className={classes.tab}>
          Information
        </Tabs.Tab>
        <Tabs.Tab value='pricing' className={classes.tab}>
          Pricing
        </Tabs.Tab>
        <Tabs.Tab value='feature' className={classes.tab}>
          Feature
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='information' pt='xs'>
        <Text fz={22} fw={600}>Acala Overview</Text>
        <div className={classes.overview}>
            <div className={classes.content} style={{borderBottom: '1px solid gray'}}>
                <Text fz={16} fw={600}>Case Study</Text>
                <Text>Acala is an Ethereum-compatible platform for financial applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security. It offers a suite of financial applications with micro gas fees that can be paid in any token.</Text>
            </div>

            <div className={classes.content} style={{borderBottom: '1px solid gray'}}>
                <Text fz={16} fw={600}>Challenge</Text>
                <Text>On most of the major layer-1 (L1) platforms, native tokens are required to pay for transaction fees. This is a major hurdle for newcomers to decentralized finance (DeFi). For example, they may want to convert fiat to stablecoins and use them to participate in DeFi protocols. But this might also require them to purchase the native tokens of the DeFi platform they are using in order to be able to actually use their stablecoins. This involves a lot more work and brings them unwanted exposure to the crypto market.</Text>
            </div>

            <div className={classes.content} style={{borderBottom: '1px solid gray'}}>
                <Text fz={16} fw={600}>Solution</Text>
                <Text>Substrate also provides an EVM pallet that allows Acala to support EVM & Solidity smart contracts with Acala’s custom-built EVM+. This means that existing Solidity smart contracts can be ported to the Acala platform with minimal changes, and Solidity developers can develop DeFi applications on Acala with familiar tools and libraries. At the same time, they can still customize the Acala EVM+ to include new features that are not available on other EVM platforms. This will allow Solidity smart contracts to also leverage all the advanced features of Acala as well as the multichain ecosystem of Polkadot.</Text>
            </div>
            
            <div className={classes.content} >
                <Text fz={16} fw={600}>Website</Text>
                <a>https://acala.network</a>
            </div>
        </div>

      </Tabs.Panel>

      <Tabs.Panel value='pricing' pt='xs'>
        <Text fz={22} fw={600}>Pricing</Text>

      </Tabs.Panel>

      <Tabs.Panel value='feature' pt='xs'>
        <Text fz={22} fw={600}>Feature</Text>

      </Tabs.Panel>
    </Tabs>
  )
}

export default ReviewCardDescription
