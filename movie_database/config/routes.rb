Rails.application.routes.draw do
	resources :movies, only: [:index, :create, :update, :show]
	resources :api_keys, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
