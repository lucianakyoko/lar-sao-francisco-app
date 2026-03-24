import { useQuery } from "@tanstack/react-query"
import { Animal } from "@/types"
import { fetchAnimals } from "@/services/animalService"

export const useAnimals = () => {
  return useQuery<Animal[], Error>({
    queryKey: ['animals'],
    queryFn: fetchAnimals,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2
  })
}
