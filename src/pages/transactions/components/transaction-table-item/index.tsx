import { memo } from 'react'

import * as S from './styles'

type TransactionItemProps = {
  transaction: {
    description: string
    type: 'outcome' | 'income'
    price: string
    category: string
    createdAt: string
  }
}

function TransactionTableItemComponent({ transaction }: TransactionItemProps) {
  return (
    <S.TransactionItemContainer>
      <td width="50%">{transaction.description}</td>
      <td>
        <S.PriceHighlight variant={transaction.type}>
          {transaction.type === 'outcome' && '- '}
          {transaction.price}
        </S.PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{transaction.createdAt}</td>
    </S.TransactionItemContainer>
  )
}

export const TransactionTableItem = memo(
  TransactionTableItemComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.transaction.category === nextProps.transaction.category &&
      prevProps.transaction.createdAt === nextProps.transaction.createdAt &&
      prevProps.transaction.description === nextProps.transaction.description &&
      prevProps.transaction.price === nextProps.transaction.price &&
      prevProps.transaction.type === nextProps.transaction.type
    )
  },
)
