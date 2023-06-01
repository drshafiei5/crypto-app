import React from 'react'

function CurrencyHeader({ titles }: { titles: string[] }) {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        {titles?.length &&
          titles.map((t, idx) => (
            <th key={idx} className="py-3 px-6 text-center">
              {t}
            </th>
          ))}
      </tr>
    </thead>
  )
}

export default CurrencyHeader
