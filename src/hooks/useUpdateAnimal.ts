import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAnimal } from "@/services/animalService";

export const useUpdateAnimal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data, images }: { 
      id: string; 
      data: any; 
      images: string[] 
    }) => updateAnimal(id, data, images),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] });
      alert('Animal atualizado com sucesso!')
    },

    onError: (error: any) => {
      console.error(error)
      alert('Erro ao atualizar animal. Tente novamente')
    },
  });
};