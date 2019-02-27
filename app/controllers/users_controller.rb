# frozen_string_literal: true

class UsersController < ApplicationController

  # /
  def index
    @users = User.all
    @langs = @users.flat_map{ |item| item[:favorite_language] }
    @poll  = @langs.group_by(&:itself).transform_values(&:count).flat_map{ |key, value| "#{key}" }.reject(&:blank?).to_a
    @fav   = @poll.first
    # @users = @get_users.map do |item| item[:name] end
    respond_to do |format|
      format.html
      format.json { @users }
    end
  end
end
