import Image, { StaticImageData } from 'next/image'

export interface Transaction {
  id: string
  image: StaticImageData
  name: string
  category: string
  date: string
  price: number
}

interface TransactionItemProps {
  transaction: Transaction
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between py-4 px-2 space-x-2 sm:space-x-4">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative w-14 h-10 sm:w-16 sm:h-12 flex-shrink-0">
          <Image
            src={transaction.image}
            alt={transaction.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 56px, 64px"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h3 className="font-medium text-sm sm:text-base truncate">{transaction.name}</h3>
          <p className="text-xs sm:text-sm text-blue-500">{transaction.category}</p>
        </div>
      </div>
      <div className="flex flex-col items-end flex-shrink-0">
        <p className="text-xs sm:text-sm text-gray-500">{transaction.date}</p>
        <p className="font-medium text-sm sm:text-base">${transaction.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
