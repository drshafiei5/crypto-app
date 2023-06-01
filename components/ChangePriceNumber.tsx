import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

function ChangePriceNumber({ price }: { price: number }) {
  return (
    <div className="flex items-center">
      <div className="mr-1">
        {price > 0 ? <FaArrowUp color="green" /> : <FaArrowDown color="red" />}
      </div>
      <span className="font-medium">{Math.abs(price).toFixed(2)}%</span>
    </div>
  )
}

export default ChangePriceNumber
