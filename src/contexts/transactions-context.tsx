import { useCallback, useEffect, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

import { api } from '../lib/api'

type Transaction = {
  id: string | number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type CreateTransactionData = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

type TransactionsContextType = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionData) => Promise<void>
}

type TransactionsProviderProps = {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const { category, description, price, type } = data

    const response = await api.post<Transaction>('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  return useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )
}

export function useCreateTransaction() {
  return useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  )
}

export function useFetchTransactions() {
  return useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )
}
