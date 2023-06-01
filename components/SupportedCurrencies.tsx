import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { BeatLoader } from 'react-spinners'
import { getData } from '@/utils/requests'
import { getErrorText } from '@/utils/functions'

function SupportedCurrencies() {
  const fetchCurrencies = async (): Promise<string[]> => {
    return getData(
      `simple/supported_vs_currencies`,
    )
  }

  const { isLoading, data, error } = useQuery<string[], AxiosError>({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-between h-[100vh] w-fit mx-auto">
        <BeatLoader color="#36d7b7" />
      </div>
    )
  }

  if (error) return <p className="font-bold">{getErrorText(error.code)}</p>

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ml-2">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Some Supported Currencies
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full border-collapse text-blueGray-700  ">
            <thead className="thead-light ">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  #
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length &&
                data.slice(0, 15).map((c, idx) => (
                  <tr key={idx}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {idx + 1}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {c}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SupportedCurrencies
