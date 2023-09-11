import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { newsQueryDTO, newsSearchDTO } from './news-dtos';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

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
