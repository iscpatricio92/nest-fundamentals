import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  getNewEnpoint(): string {
    return "i'm new'";
  }

  @Get('/route/')
  getSlash(): string {
    return 'con /sas/';
  }
  @Get('/products/filter')
  getProductFilter() {
    return `product fitler`;
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} and products ${productId}`;
  }

  @Get('/products/')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product ${limit} and offset ${offset} and brand ${brand}`;
  }
}
