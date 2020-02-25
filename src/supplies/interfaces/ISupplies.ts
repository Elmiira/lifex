import { SuppliesCategories } from '../types/index';

export interface ISupplies {
  id: number;
  item: string;
  description: string;
  brand: string;
  inUse: number;
  stock: number;
  std: number;
  category: SuppliesCategories;
  isActive: boolean;
}
