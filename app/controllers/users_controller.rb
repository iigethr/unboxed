# frozen_string_literal: true

class UsersController < ApplicationController
  # /
  def index
    @users ||= User.all
    language_processing(@users)
    respond_to do |format|
      format.html
      format.json { @users }
    end
  end
end
