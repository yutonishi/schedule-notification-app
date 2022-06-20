Rails.application.routes.draw do
  root to: "tasks#index"
  devise_for :users, controllers: {
    omniauth_callbacks: "omniauth_callbacks"
  }
  resources :tasks
  resources :users
  post '/callback' => 'linebot#callback'
  def after_update_path_for(resource)
    new_user_session_path
  end
end
