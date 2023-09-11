import { Controller, Get, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { newsQueryDTO, newsSearchDTO } from './news-dtos';

@Injectable()
export class AppService {
  constructor(
  private readonly httpService: HttpService,
  ) {
  }
  
  API_KEY = process.env.NEWS_API_KEY;

  async getNews(
    query: newsQueryDTO
  ): Promise<any> {
    try {  
      // top headlines
      console.log(this.API_KEY)
      const topHeadlinesUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      const topHeadLines = await firstValueFrom(this.httpService.get(topHeadlinesUrl, {  }));
      console.log(topHeadLines.data)
      return topHeadLines.data;
    } catch (error) {
      console.log(`[ERROR] ${error}`)
      throw new Error(error.message)
    }
  }
  
  async searchNews(
    query: newsSearchDTO
  ): Promise<any> {
    try {  
      const title = query.title;
      const authorName = query.authorName;

      let newsSearchUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      if (title)
        newsSearchUrl = `https://gnews.io/api/v4/search?q=${title}&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
        console.log(newsSearchUrl, 'url')
      if (authorName)
        newsSearchUrl = `https://gnews.io/api/v4/search?q=${authorName}&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      
      const foundNews = await firstValueFrom(this.httpService.get(newsSearchUrl, {  }));
      
      return foundNews.data;
    } catch (error) {
      console.log(`[ERROR] ${error}`)
      throw new Error(error.message)
    }
  }
}
