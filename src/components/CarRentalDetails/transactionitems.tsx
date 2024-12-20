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
    <div className="flex items-center justify-between py-4 space-x-4">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-12 sm:w-20 sm:h-14">
          <Image
            src={transaction.image}
            alt={transaction.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-sm sm:text-base">{transaction.name}</h3>
          <p className="text-sm text-blue-500">{transaction.category}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500">{transaction.date}</p>
        <p className="font-medium">${transaction.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

