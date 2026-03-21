import api from "@/lib/api";
import { DonationGroup } from "../types";

export const fetchDonationSummary = async () => {
  const response = await api.get('/donation/summary');
  return response.data;
}

export const fetchAllDonationGroupedByAnimal = async (): Promise<DonationGroup[]> => {
  const response = await api.get<DonationGroup[]>('/donation/animals');
  return response.data;
}
