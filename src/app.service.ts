import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { NewsQueryDTO, NewsSearchDTO, NewsType } from './news-dtos';

@Injectable()
export class AppService {
  constructor(
  private readonly httpService: HttpService
  ) {
  }

  API_KEY = process.env.NEWS_API_KEY;

  /**
   * takes input no of articles, and returns top n news articles
   * @query - input parameters such as no of articles requested
   * @returns - list of matching articles
   */
  async getNews(
    query: NewsQueryDTO
  ): Promise<NewsType[]> {
    try {  
      // top headlines
      const topHeadlinesUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      const topHeadLines = await firstValueFrom(this.httpService.get(topHeadlinesUrl, {  }));

      return topHeadLines?.data?.articles;
    } catch (error) {
      console.log(`[ERROR] ${error}`)
      throw new Error(error.message)
    }
  }
  
  /**
   * takes input the query parameters and return matching news articles
   * @param query - query parameters
   * @returns - list of matching articles
   */
  async searchNews(
    query: NewsSearchDTO
  ): Promise<NewsType[]> {
    try {  
      console.log('searching news ... ');
      const title = query.title;
      const authorName = query.authorName;

      let newsSearchUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      if (title)
        newsSearchUrl = `https://gnews.io/api/v4/search?q=${title}&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      if (authorName)
        newsSearchUrl = `https://gnews.io/api/v4/search?q=${authorName}&lang=en&country=us&max=${query.articleCount}&apikey=${this.API_KEY}`
      
      const foundNews = await firstValueFrom(this.httpService.get(newsSearchUrl, {  }));
      
      return foundNews?.data?.articles;
    } catch (error) {
      console.log(`[ERROR] ${error}`)
      throw new Error(error.message)
    }
  }
}
