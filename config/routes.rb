Rails.application.routes.draw do
  root to: "tasks#index"
  devise_for :users, controllers: {
    omniauth_callbacks: "omniauth_callbacks"
  }
  resources :tasks
  resources :users
  post '/callback' => 'linebot#callback'
end
