# frozen_string_literal: true

class User < ApplicationRecord
  # validations
  validates :login, presence: true
  validates :login, uniqueness: true
end
