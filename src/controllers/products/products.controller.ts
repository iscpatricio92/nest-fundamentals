import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductsService } from './../../services/products/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /*return {
      message: `product ${limit} and offset ${offset} and brand ${brand}`,
    };*/
    return this.productsService.findAll();
  }
  @Get('/filter')
  getFilter() {
    return { message: `product fitler` };
  }

  @Get('/:productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    //return { message: `product ${productId}` };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
