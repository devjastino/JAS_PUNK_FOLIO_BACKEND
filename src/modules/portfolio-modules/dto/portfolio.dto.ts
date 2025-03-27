export interface CreatePortfolioDto {
  _id: string;
  title: string;
  description: string;
  images: Array<{ uri: String; is_active: Boolean }>;
  link: string;
  is_active: boolean;
}

export interface PortfolioDto {
  title: string;
  description: string;
  images: Array<{ uri: String; is_active: Boolean }>;
  link: string;
  is_active: boolean;
}

export interface UpdatePortfolioDto {
  _id: string;
  title: string;
  description: string;
  images: Array<{ uri: String; is_active: Boolean }>;
  link: string;
  is_active: boolean;
}
