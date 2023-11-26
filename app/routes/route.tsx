import { type MetaFunction } from '@remix-run/react'

import logo from 'assets/logo.svg'

export const meta: MetaFunction = () => {
  return [
    { title: 'nub – A collaborative alternative to Gist' },
    { name: 'description', content: 'An alternative collaborative Gist' },
  ]
}

export default function Index() {
  return (
    <main className="container mx-auto flex min-h-full flex-col items-center justify-center gap-y-4 px-8">
      <img alt="nub" className="w-full max-w-xl" src={logo} />
    </main>
  )
}
