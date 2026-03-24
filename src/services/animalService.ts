import api from "@/lib/api";
import { Animal } from "@/types";

export const fetchAnimals = async (): Promise<Animal[]> => {
  const response = await api.get<Animal[]>('/animal');
  return response.data;
}

export const createAnimal = async (dto: any, images: string[] = []): Promise<any> => {
  const formData = new FormData();
  formData.append('dto', JSON.stringify(dto));
  
  for (const uri of images) {
    const filename = uri.split('/').pop() || `image_${Date.now()}.jpg`;
    formData.append('images', {
      uri: uri,
      name: filename,
      type: 'image/jpeg',
    } as any);
  }

  const response = await api.post('/animal', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const updateAnimal = async (id: string, data: any, images: string[] = []): Promise<any> => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('birthDate', data.birthDate.toISOString());
  formData.append('personality', data.personality);
  formData.append('size', data.size);
  formData.append('vaccinated', data.vaccinated.toString());
  formData.append('neutered', data.neutered.toString());
  formData.append('about', data.about);
  formData.append('availableForAdoption', data.availableForAdoption.toString());

  if (data.needsList && data.needsList.length > 0) {
    formData.append('needsList', JSON.stringify(data.needsList));
  }

  for (const uri of images) {
    const filename = uri.split('/').pop() || 'image.jpg';
    formData.append('images', {
      uri,
      name: filename,
      type: 'image/jpeg',
    } as any);
  }

  const response = await api.patch(`/animal/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const deleteAnimal = async (animalId: string): Promise<void> => {
  await api.delete(`/animal/${animalId}`);
};
