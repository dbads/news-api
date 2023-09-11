import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { newsQueryDTO } from './news-dtos';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNews(
    @Query() query: newsQueryDTO
  ): Promise<any> {
    return this.appService.getNews(query);
  }
}
