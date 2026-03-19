import { useQuery } from "@tanstack/react-query"
import { fetchDonationSummary } from "@/services/donationService"

export const useDonationSummary = () => {
  return useQuery({
    queryKey: ['donation', 'summary'],
    queryFn: fetchDonationSummary,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2
  })
}
