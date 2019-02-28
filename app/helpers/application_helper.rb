# frozen_string_literal: true

module ApplicationHelper
  # Application configuration
  def application_configuration
    Rails.configuration.application_configuration
  end

  # User avatar
  def user_avatar(user = "")
    image_tag user.try(:avatar_url) || "icons/face.png"
  end

  # User favorite
  def user_favorite(user = "")
    if user.language.presence
      user.language
    else
      "Undefined"
    end
  end
end
