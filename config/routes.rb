Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "articles#top_headlines"

  scope :api do
    resources :articles
      get '/top_headlines', to: 'articles#top_headlines'
      get '/sources', to: 'articles#sources'
      post '/news_filters/', to: 'articles#news_filters'
      get '/sources/:source/:page', to: 'articles#source_articles'
      get '/filters', to: 'filter#recent'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
