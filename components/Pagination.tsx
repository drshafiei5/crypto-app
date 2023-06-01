import { Dispatch, SetStateAction, ChangeEvent } from 'react'

interface PaginationProps {
  total: number
  perPage: number
  currentPage: number
  setPerPage: Dispatch<SetStateAction<number>>
  setPage: Dispatch<SetStateAction<number>>
}

function Pagination({
  perPage,
  setPerPage,
  total,
  currentPage,
  setPage,
}: PaginationProps) {
  const pageCount = Math.ceil(total / perPage);
  const updatePageNumber = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      setPage(page)
    }
  }

  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex text-gray-700">
        <div
          className="h-8 w-8 mr-1 flex justify-center items-center rounded-full text-sm bg-gray-200 cursor-pointer"
          onClick={() => updatePageNumber(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left w-4 h-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="flex h-8 font-medium rounded-full text-sm bg-gray-200">
          <div
            className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === 1 && 'bg-pink-600 text-white'
              }`}
            onClick={() => updatePageNumber(1)}
          >
            1
          </div>
          <div
            className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === 2 && 'bg-pink-600 text-white'
              }`}
            onClick={() => updatePageNumber(2)}
          >
            2
          </div>
          {currentPage >= 3 && currentPage < 5 && (
            <>
              <div
                className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === 3 && 'bg-pink-600 text-white'
                  }`}
                onClick={() => updatePageNumber(3)}
              >
                3
              </div>
              <div
                className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === 4 && 'bg-pink-600 text-white'
                  }`}
                onClick={() => updatePageNumber(4)}
              >
                4
              </div>
            </>
          )}
          <div className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm">
            ...
          </div>

          {currentPage >= 5 &&
            currentPage <= pageCount - 3 && (
              <>
                <div
                  className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm"
                  onClick={() => updatePageNumber(currentPage - 1)}
                >
                  {currentPage - 1}
                </div>
                <div className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm bg-pink-600 text-white">
                  {currentPage}
                </div>
                <div
                  className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm"
                  onClick={() => updatePageNumber(currentPage + 1)}
                >
                  {currentPage + 1}
                </div>
                <div className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm">
                  ...
                </div>
              </>
            )}

          <div
            className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === pageCount - 1 &&
              'bg-pink-600 text-white'
              }`}
            onClick={() => updatePageNumber(pageCount - 1)}
          >
            {pageCount - 1}
          </div>
          <div
            className={`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm ${currentPage === pageCount &&
              'bg-pink-600 text-white'
              }`}
            onClick={() => updatePageNumber(pageCount)}
          >
            {pageCount}
          </div>
          <div className="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full text-sm bg-pink-600 text-white">
            {currentPage}
          </div>
        </div>
        <div
          className="h-8 w-8 ml-1 flex justify-center items-center rounded-full text-sm bg-gray-200 cursor-pointer"
          onClick={() => updatePageNumber(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-4 h-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      <div>
        <label htmlFor="perpages_select" className="sr-only">
          Underline select
        </label>
        <select
          value={perPage}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPerPage(+e.target.value)
          }
          id="perpages_select"
          className="block p-3 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination
