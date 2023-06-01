import CurrencyCollection from '@/components/CurrencyCollection'
import SupportedCurrencies from '@/components/SupportedCurrencies'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[75%] mx-auto mt-4">
        <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen flex items-start justify-center bg-gray-100 font-sans overflow-hidden">
            <div className="w-full lg:w-4/5">
              <CurrencyCollection />
            </div>
            <div className="w-full lg:w-1/5">
              <SupportedCurrencies />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default Home
