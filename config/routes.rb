Rails.application.routes.draw do
  get 'main/report', to: 'main#reports'
  resources :stocks
  get 'update_stocksdb', to: 'main#update_stock_db'
  get 'reset_stock_data', to: 'main#reset_stock_data'
  get 'search', to: 'search#find'
  root 'main#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'application#hello'
end
