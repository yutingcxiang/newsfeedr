class ArticlesController < ApplicationController

  #Default page set to show top 20 news articles from the US.
  def top_headlines
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['country'] = 'us'
      req.params['pageSize'] = 100
      req.params['page'] = 1
    end
    @top_headlines = JSON.parse(response.body)
    render json: @top_headlines, status: 200
  end

  # Returns sources from popular headlines (can also be used to get categories)
  def sources
    response = Faraday.get 'https://newsapi.org/v2/sources?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['country'] = 'us'
    end
    @sources = JSON.parse(response.body)
    render json: @sources, status: 200
  end

  # Search all news based on user query.
  def filtered_news
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['q'] = params["query"]
      req.params['sortBy'] = 'relevancy'
      req.params['language'] = 'en'
      req.params['pageSize'] = 100
      req.params['page'] = params["page"]
    end
    @query_articles = JSON.parse(response.body)
    render json: @query_articles, status: 200
  end

  def source_articles
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['sources'] = params["source"]
      req.params['pageSize'] = 100
      req.params['language'] = 'en'
      req.params['page'] = params["page"]
    end
    @source_articles = JSON.parse(response.body)
    render json: @source_articles, status: 200
  end
end
