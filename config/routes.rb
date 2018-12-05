Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :articles
      get '/top_headlines', to: 'articles#top_headlines'
      get '/sources', to: 'articles#sources'
      get '/filtered/:query', to: 'articles#filtered_news'
      get '/sources/:source/', to: 'articles#source_articles'
  end
end
