Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "welcome#index"

  scope :api do
    resources :articles
      get '/top_headlines', to: 'articles#top_headlines'
      get '/sources', to: 'articles#sources'
      get '/filtered/:query/:page', to: 'articles#filtered_news'
      get '/sources/:source/:page', to: 'articles#source_articles'
  end
end
