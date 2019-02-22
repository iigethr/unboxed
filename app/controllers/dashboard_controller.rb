# frozen_string_literal: true

class DashboardController < ApplicationController
  # /
  def index
    # Get the :username via url params.
    @username ||= params[:username]
  end
end
