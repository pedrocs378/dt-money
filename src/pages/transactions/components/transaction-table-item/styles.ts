import styled from 'styled-components'

export const TransactionItemContainer = styled.tr`
  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

type PriceHighlightProps = {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`
