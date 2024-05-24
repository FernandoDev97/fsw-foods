import { cx } from 'class-variance-authority'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'

interface ButtonsQuantityProductProps {
  className?: string
}

export const ButtonsQuantityProduct = ({
  className,
}: ButtonsQuantityProductProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) return
    setQuantity((state) => state - 1)
  }

  const handleIncreaseQuantity = () => {
    setQuantity((state) => state + 1)
  }
  return (
    <div className="flex items-center mt-auto">
      <Button
        variant="outline"
        size="icon"
        className={cx('border-gray-300 bg-transparent h-fit p-2', className)}
        onClick={handleDecreaseQuantity}
      >
        <Minus size={22} />
      </Button>
      <span className="w-[1.75rem] text-center text-sm">{quantity}</span>
      <Button
        onClick={handleIncreaseQuantity}
        size="icon"
        className={cx('border h-fit p-2', className)}
      >
        <Plus size={22} />
      </Button>
    </div>
  )
}
