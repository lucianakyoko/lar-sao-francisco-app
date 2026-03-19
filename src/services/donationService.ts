import api from "@/lib/api";

export const fetchDonationSummary = async () => {
  const response = await api.get('/donation/summary');
  return response.data;
}
