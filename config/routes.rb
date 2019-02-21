# frozen_string_literal: true

Rails.application.routes.draw do
  # Root Controller
  root "dashboard#index"
  resources :dashboard, only: [:index]
end
