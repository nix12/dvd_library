require "tus/server"

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :movies, only: [:index, :create, :update, :show]
  resources :api_keys, only: [:create]
  mount Tus::Server => "/files"
end
