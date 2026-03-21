import { useQuery } from "@tanstack/react-query"
import { fetchAllDonationGroupedByAnimal } from "@/services/donationService"
import { DonationGroup } from "../types"

export const useDonationsGroupedByAnimals = () => {
  return useQuery<DonationGroup[], Error>({
    queryKey: ['donation_grouped_by_animal'],
    queryFn: fetchAllDonationGroupedByAnimal,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2
  })
}
