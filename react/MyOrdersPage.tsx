import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import constants from './constants'
import { OrdersPage } from './pages/OrdersPage'

const MyOrdersPage = () => (
  <>
    <Route exact path={constants['path-orders']} component={OrdersPage} />
  </>
)

export default MyOrdersPage
