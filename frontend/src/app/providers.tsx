'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type FC, type PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	})

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
