Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :articles
      get '/top_headlines', to: 'articles#top_headlines'
      get '/sources_categories', to: 'articles#sources_categories'
      get '/filtered_news/:query', to: 'articles#filtered_news'
  end
end
