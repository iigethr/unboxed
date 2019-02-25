# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    @name ||= params[:name]
    if User.where(name: @name).presence
      flash[:notice] = "The user does exist in the database. Yayyyyy!!!"
      @user ||= User.where(name: @name).first
    else
      flash[:notice] = "The user doesn't exist in the database. Damn!!! Now we should look into GitHub and see if the user exists there."
    end
  end

  # /
  def create
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
