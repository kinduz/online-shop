import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import React from 'react'

import { APP_NAME } from '@/constants/seo.constants'

import './globals.scss'

export const metadata: Metadata = {
	title: {
		absolute: APP_NAME,
		template: `%s ${APP_NAME}`
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={GeistSans.variable}>{children}</body>
		</html>
	)
}
