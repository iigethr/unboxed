# frozen_string_literal: true

module ApplicationHelper
  # Application configuration
  def application_configuration
    Rails.configuration.application_configuration
  end

  # User avatar
  def user_avatar(user = "")
    user.try(:avatar_url) || "icons/face.png"
  end

  # User favorite
  def user_favorite(user = "")
    language = user.language
    if language.presence
      language
    else
      "Undefined"
    end
  end
end
