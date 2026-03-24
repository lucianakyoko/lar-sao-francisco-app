import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnimal } from "@/services/animalService";

export const useCreateAnimal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ dto, images }: { dto: any; images: string[] }) => 
      createAnimal(dto, images),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] });
      alert('Animal cadastrado com sucesso!')
    },

    onError: (error: any) => {
      alert('Erro ao cadastrar animal. Verifique os dados e tente novamente.')
    },
  });
};