import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from './contexts/transactions-context'

import { Transactions } from './pages/transactions'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export { App }
