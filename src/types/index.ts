export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

// ==================== ANIMAL ====================
export interface NeedItem {
  _id?: string;
  image: string;
  name: string;
  price: number;
}

export interface Animal {
  _id: string;
  name: string;
  birthDate: string;           // ISO string
  personality: string;
  size: 'pequeno' | 'medio' | 'grande';
  vaccinated: boolean;
  neutered: boolean;
  about: string;
  availableForAdoption: boolean;
  needsList?: NeedItem[];
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}

// ==================== DONATION ====================
export interface DonatedItem {
  itemId: string;
  quantity: number;
}

export interface CreateDonationDto {
  donorName?: string;
  animalId: string;
  donatedItems: DonatedItem[];
  extraAmount?: number;
}

export interface Donation {
  _id: string;
  donorName?: string;
  animalId: string;
  donatedItems: DonatedItem[];
  extraAmount?: number;
  totalAmount?: number;
  createdAt: string;
}