import { Controller, Get, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { newsQueryDTO } from './news-dtos';

@Injectable()
export class AppService {
  constructor(
  private readonly httpService: HttpService,
  ) {}

  async getNews(
    query: newsQueryDTO
  ): Promise<any> {
    const newsUrlAPIEndPoint = process.env.NEWS_API_URL;
    // const API_KEY = process.env.NEWS_API_KEY;
    // https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=1670656c2ef0be86408e10a60c5f3808
    // console.log(newsUrlAPIURL);

    // fetch('https://example.com/data') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error(error)); 


    // top headlines
    const topHeadlinesUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=${query.articleCount}&apikey=1670656c2ef0be86408e10a60c5f3808`
    const topHeadLines = await firstValueFrom(this.httpService.get(topHeadlinesUrl, {  }));
    console.log(topHeadLines.data)
    return topHeadLines.data;
  }
}
