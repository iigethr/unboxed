# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    # NOTE: Code is super super dirty!
    # Working () but needs work.
    # A LOT!

    @users = User.all
    # Lets monitor the "cheap" GitHub rates.
    @limit  = HTTParty.get("https://api.github.com/rate_limit")
    # Get the username from the URL params
    @name   = params[:name]
    if User.where(name: @name).presence
      flash.now[:notice] = "The user does exist in the database. Yayyyyy!!!"
      @user = User.where(name: @name).first
    elsif (params.has_key?(:name) || !params[:name].blank?)
        @response = HTTParty.get("https://api.github.com/users/#{@name}")
        @repos    = HTTParty.get("https://api.github.com/users/#{@response["login"]}/repos")
        @langs    = @repos.map{ |item| "#{item['language']}" }
        @poll     = @langs.group_by(&:itself).transform_values(&:count).map{ |key, value| "#{key}" }.reject(&:blank?).to_a
        @fav      = @langs.first
      # Create the user
      if @response["name"].presence
        @user = User.create(
          name: @response["login"],
          bio: @response["bio"],
          favorite_language: @fav
        )
        @user.save
        flash.now[:notice] = "The user exists in GitHub and has been saved to the database"
      else
        flash.now[:notice] = "The user doesn't exist in the database. Damn!!!"
      end
    end
  end

  private

  # White list params.
  def user_params
    params.require(:user).permit(
      :name,
      :bio,
      :language
    )
  end
end
