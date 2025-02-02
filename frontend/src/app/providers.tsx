'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type FC, type PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	})

	return (
		<QueryClientProvider client={client}>
			<Toaster />
			{children}
		</QueryClientProvider>
	)
}
