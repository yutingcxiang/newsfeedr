class ArticlesController < ApplicationController

  #Default page set to show top 20 news articles from the US.
  def top_headlines(country="us")
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['country'] = 'us'
    end
    @top_headlines = JSON.parse(response.body)
    render json: @top_headlines, status: 200
  end

  #Search all news with default value of 'technology'.
  def search_all_news(query="technology")
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['q'] = query
    end
    @query_articles = JSON.parse(response.body)
    render json: @query_articles, status: 200
  end

end
