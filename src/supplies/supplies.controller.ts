import {
  Controller,
  Post,
  Delete,
  Param,
  Query,
  Put,
  Body,
} from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { IPagination } from './interfaces';
import { QueryDto, SuppliesDTO } from './types';

@Controller('/supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Post('/search')
  getSupplies(@Body() query: QueryDto, @Query() pagination: IPagination): any {
    const { page, pageSize } = pagination;
    return this.suppliesService.find(query, page, pageSize);
  }

  @Post()
  addSupplies(@Body() supplies: any): boolean {
    return this.suppliesService.insert(supplies);
  }

  @Put('/:id')
  editSupplies(@Param('id') suppliesId: string, @Body() newSupplies: SuppliesDTO): boolean {
    return this.suppliesService.update(suppliesId, newSupplies);
  }

  @Delete('/:id')
  removeSupplies(@Param('id') supplyId: string): any {
    return this.suppliesService.delete(supplyId);
  }
}
