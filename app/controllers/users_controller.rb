# frozen_string_literal: true

class UsersController < ApplicationController

  # /
  def index
    @users = User.all
    # @users = @get_users.map do |item| item[:name] end
    respond_to do |format|
      format.html { redirect_to root_path}
      format.json { @users }
    end
  end
end
