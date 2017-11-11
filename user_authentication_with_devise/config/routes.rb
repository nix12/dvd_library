Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: { sessions: "sessions" }

  resources :users, only: [:update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
