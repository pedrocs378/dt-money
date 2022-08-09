import { useTransactions } from '../../contexts/transactions-context'

import { Header } from '../../components/header'
import { Summary } from '../../components/summary'

import { SearchForm } from './components/search-form'
import { TransactionTableItem } from './components/transaction-table-item'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

import * as S from './styles'

export function Transactions() {
  const transactions = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <TransactionTableItem
                  key={transaction.id}
                  transaction={{
                    description: transaction.description,
                    type: transaction.type,
                    price: priceFormatter.format(transaction.price),
                    category: transaction.category,
                    createdAt: dateFormatter.format(
                      new Date(transaction.createdAt),
                    ),
                  }}
                />
              )
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
