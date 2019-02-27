# frozen_string_literal: true

Rails.application.routes.draw do
  # Root Controller
  root "dashboard#index"
  resources :dashboard, only: :index
  # Users
  resources :users, only: :index, constraints: { format: "json" }
end
