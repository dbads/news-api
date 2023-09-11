### Instructions to run the API:

git clone git@github.com:dbads/news-api.git
yarn install // install dependencies
yarn start:dev // starting dev server


### APIs

#### GET the top news

localhost:3000/news?articleCount=n // n can be any number


#### GET news by title or author

localhost:3000/news/search?title="Any title"
localhost:3000/news/search?author="Author name"


##### Also updated the same in the GitHub repo - readme.md file
##### I have pushed .env file for now, but ideally we should put .env in gitignore
