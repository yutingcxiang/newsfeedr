Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    resources :articles
    get '/top_headlines', to: 'articles#top_headlines'
    get '/search_all_news', to: 'articles#search_all_news'
  end
end
