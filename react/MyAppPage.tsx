import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import constants from './constants'
import { AppPage } from './pages/AppPage'

const MyAppPage = () => (
  <>
    <Route exact path={constants['path-app']} component={AppPage} />
  </>
)

export default MyAppPage
