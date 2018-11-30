class ArticlesController < ApplicationController

  #Default page set to show top 20 news articles from the US.
  def top_headlines(country="us")
    response = Faraday.get 'https://newsapi.org/v2/top-headlines?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['country'] = country
    end
    @top_headlines = JSON.parse(response.body)
    render json: @top_headlines, status: 200
  end

  # Returns sources from popular headlines (can also be used to get categories)
  def sources_categories
    response = Faraday.get 'https://newsapi.org/v2/sources?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
    end
    @sources_categories = JSON.parse(response.body)
    render json: @sources_categories, status: 200
  end

  # Search all news with default value of 'technology'.
  def filtered_news
    response = Faraday.get 'https://newsapi.org/v2/everything?' do |req|
      req.params['apiKey'] = ENV['API_KEY']
      req.params['q'] = params["query"]
    end
    @query_articles = JSON.parse(response.body)
    render json: @query_articles, status: 200
  end

end
