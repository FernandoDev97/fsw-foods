'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

export const ButtonBack = () => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.replace('/')}
      className="absolute bg-gray-100 top-4 left-4 h-auto p-1 rounded-full text-center hover:bg-white"
    >
      <ChevronLeft className="text-black" />
    </Button>
  )
}
