import { Controller, Get, UseInterceptors, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { newsQueryDTO, newsSearchDTO } from './news-dtos';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('news')
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @Get()
  getNews(
    @Query() query: newsQueryDTO
  ): Promise<any> {
    return this.appService.getNews(query);
  }
  
  @Get('/search')
  searchNews(
    @Query() query: newsSearchDTO
  ): Promise<any> {
    return this.appService.searchNews(query);
  }
}
