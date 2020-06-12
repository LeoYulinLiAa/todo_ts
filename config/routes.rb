Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :todos, only: %i[show index create update destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home_page#index'
end
