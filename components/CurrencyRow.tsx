import Image from 'next/image'

import { Currency } from '@/utils/types'
import ChangePriceNumber from './ChangePriceNumber'

function CurrencyRow(props: Currency) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-3">
            <Image src={props.image} width={25} height={25} alt={props.name} />
          </div>
          <span className="font-medium">{props.name}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>${props.current_price}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <ChangePriceNumber
          price={props.price_change_percentage_24h_in_currency}
        />
      </td>
      <td className="py-3 px-6 text-center">
        <ChangePriceNumber
          price={props.price_change_percentage_7d_in_currency}
        />
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          ${props.market_cap}
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          ${props.total_volume}
        </div>
      </td>

      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          {Math.round(props.circulating_supply)} {props.name}
        </div>
      </td>
    </tr>
  )
}

export default CurrencyRow
