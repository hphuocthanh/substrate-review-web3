import React, { createRef } from 'react'
import {
  Container,
  Dimmer,
  Loader,
  Grid,
  Sticky,
  Message,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { SubstrateContextProvider, useSubstrateState } from '../substrate-lib'
import { DeveloperConsole } from '../substrate-lib/components'

import { Outlet } from 'react-router-dom'
import AccountSelector from '../AccountSelector'

function Main () {
  const { apiState, apiError, keyringState } = useSubstrateState()

  const loader = text => (
    <Dimmer active>
      <Loader size='small'> {text} </Loader>{' '}
    </Dimmer>
  )

  const message = errObj => (
    <Grid centered columns={2} padded>
      <Grid.Column>
        <Message
          negative
          compact
          floating
          header='Error Connecting to Substrate'
          content={`Connection to websocket '${errObj.target.url}' failed.`}
        />{' '}
      </Grid.Column>{' '}
    </Grid>
  )

  if (apiState === 'ERROR') return message(apiError)
  else if (apiState !== 'READY') return loader('Connecting to Substrate')

  if (keyringState !== 'READY') {
    return loader(
      "Loading accounts (please review any extension's authorization)"
    )
  }

  const contextRef = createRef()

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <AccountSelector />
      </Sticky>{' '}
      <Container>
        <Outlet />
      </Container>{' '}
      <DeveloperConsole />
    </div>
  )
}

export default function Root () {
  return (
    <SubstrateContextProvider>
      <Main />
    </SubstrateContextProvider>
  )
}
