import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export const Header = () => {
  return (
    <Link href="/" className="flex justify-between pt-6 px-5">
      <Image
        height={30}
        width={100}
        src="/Logo.png"
        sizes="100vh"
        alt="FSW Foods"
      />
      <Button
        size="icon"
        variant="outline"
        className="bg-transparent border-none"
      >
        <MenuIcon />
      </Button>
    </Link>
  )
}
