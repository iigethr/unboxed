# frozen_string_literal: true

class DashboardController < ApplicationController
  # Callbacks
  before_action :user, only: :index

  # /
  def index
  end

  private

  def user
    # Get params[:username] injected via form to the url.
    @user ||= {
      username: params[:username]
    }
  end
end
