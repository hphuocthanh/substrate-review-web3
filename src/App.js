import React from 'react'
import { Grid } from 'semantic-ui-react'

import Balances from './Balances'
import BlockNumber from './BlockNumber'
import Events from './Events'
import Interactor from './Interactor'
import Metadata from './Metadata'
import NodeInfo from './NodeInfo'
import TemplateModule from './TemplateModule'
import Transfer from './Transfer'
import Upgrade from './Upgrade'

export default function App () {
  return (
    <Grid stackable columns='equal'>
      <Grid.Row stretched>
        <NodeInfo />
        <Metadata />
        <BlockNumber />
        <BlockNumber finalized />
      </Grid.Row>
      <Grid.Row stretched>
        <Balances />
      </Grid.Row>
      <Grid.Row>
        <Transfer />
        <Upgrade />
      </Grid.Row>
      <Grid.Row>
        <Interactor />
        <Events />
      </Grid.Row>
      <Grid.Row>
        <TemplateModule />
      </Grid.Row>
    </Grid>
  )
}
