import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import constants from './constants'
import { OrdersPage } from './components/OrdersPage'

const MyOrdersPage = () => (
  <>
    <Route exact path={constants['path-order']} component={OrdersPage} />
  </>
)

export default MyOrdersPage
