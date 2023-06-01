import {
  useRef,
  FormEvent,
  useState,
  MutableRefObject,
  ChangeEvent,
} from 'react'
import { AxiosError } from 'axios'
import { BeatLoader } from 'react-spinners'
import { QueryKey, useQuery } from '@tanstack/react-query'

import { getData } from '@/utils/requests'
import { Currency } from '@/utils/types'
import { getErrorText } from '@/utils/functions'
import CurrencyRow from './CurrencyRow'
import CurrencyHeader from './CurrencyHeader'
import Pagination from './Pagination'

function CurrencyCollection() {
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(20)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>

  const fetchCurrencies = async ({
    queryKey,
  }: {
    queryKey: QueryKey
  }): Promise<Currency[]> => {
    const [_, perPage, page, searchTerm] = queryKey

    return getData(
      `coins/markets?vs_currency=usd&page=${page}&per_page=${perPage}&ids=${searchTerm}&price_change_percentage=24h,7d`,
    )
  }

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(searchRef?.current.value.toLowerCase())
  }

  const { isLoading, data, error } = useQuery<Currency[], AxiosError>({
    queryKey: ['currencies', perPage, page, searchTerm],
    queryFn: fetchCurrencies,
    keepPreviousData: true,
    staleTime: Infinity,
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
      <form onSubmit={searchHandler}>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="Search by name like bitcoin"
            ref={searchRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.trim().length === 0) {
                setSearchTerm('')
              }
            }}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <CurrencyHeader
            titles={[
              'Name',
              'Price',
              '24H',
              '7d',
              'Market Cap',
              'Total Volume',
              'Circulating Supply',
            ]}
          />
          <tbody className="text-gray-600 text-sm font-light">
            {data?.length && data.map((c) => <CurrencyRow key={c.id} {...c} />)}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={page}
        total={10199}
        perPage={perPage}
        setPerPage={setPerPage}
        setPage={setPage}
      />
    </>
  )
}

export default CurrencyCollection
