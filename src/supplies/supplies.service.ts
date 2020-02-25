import { Injectable, Logger } from '@nestjs/common';
import { Supplies } from '../mock/index';
import { QueryDto } from './types/index';
import { ISupplies } from './interfaces';

@Injectable()
export class SuppliesService {
  logger = new Logger();
  constructor() {}

  find(query: QueryDto, page: string, pageSize: string): any {
    try {
      // *** Backend Pagination ***
      // const to = parseInt(page) * parseInt(pageSize);
      // const from = to + parseInt(pageSize);
      // const supplies = Supplies.list.slice(to, from);
      const supplies = Supplies.list.filter(supply => supply.isActive);
      const totalSupplies = Supplies.list.length;
      return { supplies, totalSupplies };
    } catch (error) {}
  }

  insert(newSupplies: ISupplies): boolean {
    try {
      Supplies.list.push(newSupplies);
      return true;
    } catch (error) {}
  }

  update(supplyId: string, newSupplies: ISupplies): boolean {
    try {
      const updatedIndex = Supplies.list.findIndex(
        supply => supply.id === parseInt(supplyId),
      );
      Supplies.list[updatedIndex] = newSupplies;
      return true;
    } catch (error) {}
  }

  delete(supplyId: string): boolean {
    try {
      const updatedIndex = Supplies.list.findIndex(
        supply => supply.id === parseInt(supplyId),
      );
      Supplies.list[updatedIndex] = {
        ...Supplies.list[updatedIndex],
        isActive: false,
      };
      return true;
    } catch (error) {}
  }
}
