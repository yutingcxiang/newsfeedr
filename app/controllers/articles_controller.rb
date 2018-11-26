class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles, status: 200
  end

  def top_headlines
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['country'] = 'us'
    end
    @articles = JSON.parse(response.body)
    render json: @articles, status: 200
  end

  def all_news
  end

  def news_sources
  end

end
