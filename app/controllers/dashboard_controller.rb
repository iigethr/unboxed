# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    # GitHub rate indicator
    # @limit = HTTParty.get("https://api.github.com/rate_limit")

    # Grab params from url
    @login = params[:login]

    if app_login.presence
      @user = app_login.first
    elsif params.key?(:login) && @login.present?
      @response = HTTParty.get("https://api.github.com/users/#{@login}")
      if @response["message"] == "Not Found"
        flash[:alert] = t("dashboard.alert")
        redirect_to root_path
      elsif github_login.presence
        @repos = HTTParty.get("https://api.github.com/users/#{github_login}/repos")
        language_processing(@repos)
        @user = User.create(
          login: github_login,
          login_type: @response["type"],
          name: @response["name"],
          bio: @response["bio"],
          public_repos: @response["public_repos"],
          avatar_url: @response["avatar_url"],
          gravatar_id: @response["gravatar_id"],
          language: @winner
        )
        @user.save
      end
    end
  end

  private

  # Valid login record from App
  def app_login
    User.where(login: @login)
  end

  # Valid login record from GitHub
  def github_login
    @response["login"]
  end
end
