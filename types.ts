export interface ServiceItem {
  name: string;
  duration?: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
  theme: 'african' | 'asian' | 'neutral';
}

export interface ContactInfo {
  name: string;
  owner: string;
  address: string;
  zipCity: string;
  phone: string;
  note: string;
}