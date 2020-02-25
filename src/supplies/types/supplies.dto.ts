import { SuppliesCategories } from '../types/index';

export class SuppliesDTO {
  readonly id: number;
  readonly item: string;
  readonly description: string;
  readonly brand: string;
  readonly inUse: number;
  readonly stock: number;
  readonly std: number;
  readonly category: SuppliesCategories;
  readonly isActive: boolean;
}
