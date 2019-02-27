# frozen_string_literal: true

module ApplicationHelper
  # Application configuration
  def application_configuration
    Rails.configuration.application_configuration
  end

  # User avatar
  def user_avatar(user = "")
    image_tag user.try(:avatar_url) || "https://picsum.photos/512/512/?random"
  end
end
