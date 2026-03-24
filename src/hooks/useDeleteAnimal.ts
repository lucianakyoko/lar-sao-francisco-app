import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAnimal } from "@/services/animalService";
import { Animal } from "@/types";

export const useDeleteAnimal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (animalId: string) => deleteAnimal(animalId),

    onMutate: async (animalId: string) => {
      await queryClient.cancelQueries({ queryKey: ['animals'] });
      const previousAnimals = queryClient.getQueryData<Animal[]>(['animals']);
      queryClient.setQueryData<Animal[]>(['animals'], (old = []) =>
        old.filter((animal) => animal._id !== animalId)
      );
      return { previousAnimals };
    },

    onError: (err, animalId, context) => {
      if (context?.previousAnimals) {
        queryClient.setQueryData(['animals'], context.previousAnimals);
      }
      console.error('Erro ao deletar animal:', err);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] });
    },
  });
};
