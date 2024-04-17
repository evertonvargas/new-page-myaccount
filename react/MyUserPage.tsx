import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import constants from './constants'
import { UserPage } from './components/UserPage'

const MyUserPage = () => (
  <>
    <Route exact path={constants['path-user']} component={UserPage} />
  </>
)

export default MyUserPage
