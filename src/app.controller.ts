import { Controller, Get, UseInterceptors, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NewsQueryDTO, NewsSearchDTO, NewsType } from './news-dtos';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('news')
@UseInterceptors(CacheInterceptor) // auto cache each route, route becomes key and ttl is default
export class AppController {
  constructor(
    private readonly appService: AppService,
    ) {}

  @Get()
  getNews(
    @Query() query: NewsQueryDTO
  ): Promise<NewsType[]> {
    return this.appService.getNews(query);
  }
  
  @Get('/search')
  searchNews(
    @Query() query: NewsSearchDTO
  ): Promise<NewsType[]> {
    return this.appService.searchNews(query);
  }
}
