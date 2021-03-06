# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    # GitHub rate indicator
    github_limit
    # Grab params from url
    @login = params[:login]
    if app_login.presence
      @user = app_login.first
    elsif params.key?(:login) && @login.present?
      github_response
      if @response["message"] == "Not Found"
        flash[:alert] = t("dashboard.alert")
        redirect_to root_path
      elsif github_login.presence
        github_repos
        language_processing(@repos)
        create_user
      end
    end
  end

  private

  # Valid login record from App
  def app_login
    User.where(login: @login)
  end

  # Save user to database
  def create_user
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
