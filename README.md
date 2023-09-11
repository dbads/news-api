### Instructions to run the API:

git clone git@github.com:dbads/news-api.git

yarn install // install dependencies

yarn start:dev // starting dev server

add a .env file in root directory, put follwoing in .env file

NEWS_API_END_POINT="https://gnews.io/api/v4"

NEWS_API_KEY="1670656c2ef0be86408e10a60c5f3808"

### APIs

#### GET the top news

localhost:3000/news?articleCount=n // n can be any number


#### GET news by title or author

localhost:3000/news/search?articleCount=4&title="Any title"

localhost:3000/news/search?articleCount=8&authorName="Author name"


##### Also updated the same in the GitHub repo - readme.md file

