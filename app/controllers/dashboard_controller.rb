# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    # Get the login from the URL params
    @login   = params[:login]
    # Lis all users in local database
    @users = User.all

    if User.where(login: @login).presence
      @user = User.where(login: @login).first
    end

    # Lets monitor the "cheap" GitHub rates.
    ### @limit  = HTTParty.get("https://api.github.com/rate_limit")
    # First call to GitHub API
    ### @response ||= HTTParty.get("https://api.github.com/users/#{@login}")
    ### if User.where(login: @login).presence
    ###   # flash.now[:notice] = "The user does exist in the database. Yayyyyy!!!"
    ###   @user = User.where(login: @login).first
    ### elsif @response["message"] == "Not Found"
    ###   redirect_to root_path
    ### elsif (params.has_key?(:login) || !params[:login].blank?)
    ###     # API calls
    ###     @repos    = HTTParty.get("https://api.github.com/users/#{@response["login"]}/repos")
    ###     # Process data
    ###     # Get all repos and map by language.
    ###     ##NOTE flat_map
    ###     @langs    = @repos.flat_map{ |item| "#{item['language']}" }
    ###     # Groug the langs
    ###     # Count how many per group.
    ###     # Map by key(language)
    ###     # Remove all blank
    ###     @poll     = @langs.group_by(&:itself).transform_values(&:count).flat_map{ |key, value| "#{key}" }.reject(&:blank?).to_a
        # With a poll predefined get the first.
        # That's the winner.
    ###     @fav      = @poll.first
    ###   # Create the user
    ###   if @response["login"].presence
    ###     # Create the user
    ###     @user = User.create(
    ###       login:              @response["login"],
    ###       login_type:         @response["type"],
    ###       name:               @response["name"],
    ###       bio:                @response["bio"],
    ###       public_repos:       @response["public_repos"],
    ###       avatar_url:         @response["avatar_url"],
    ###       gravatar_id:        @response["gravatar_id"],
    ###       favorite_language:  @fav
    ###     )
    ###     @user.save
    ###     # flash.now[:notice] = "The user exists in GitHub and has been saved to the database"
    ###   else
    ###     flash[:notice] = "Oops! Something went wrong."
    ###     redirect_to root_path
    ###   end
    ### end
  end

  private

  # White list params.
  def user_params
    params.require(:user).permit(
      :login,
      :login_type,
      :name,
      :bio,
      :public_repos,
      :favorite_language,
      :avatar_url,
      :gravatar_id
    )
  end
end
