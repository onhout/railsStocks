Rails.application.routes.draw do
  resources :stocks
  get 'update_stocksdb', to: 'main#update_stock_db'
  get 'search', to: 'search#find'
  root 'main#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'application#hello'
end
