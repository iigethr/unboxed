# frozen_string_literal: true

module Github
  extend ActiveSupport::Concern

  # GitHub sets rates - Default: 5000 per hour
  def github_limit
    @limit = HTTParty.get(
      "https://api.github.com/rate_limit",
      headers: {
        "User-Agent": ENV["GITHUB_USER_AGENT"],
        "Authorization": "token #{ENV['GITHUB_PERSONAL_TOKEN']}"
      }
    )
  end

  # Get the user
  def github_response
    @response = HTTParty.get(
      "https://api.github.com/users/#{@login}",
      headers: {
        "User-Agent": ENV["GITHUB_USER_AGENT"],
        "Authorization": "token #{ENV['GITHUB_PERSONAL_TOKEN']}"
      }
    )
  end

  # Get the users repos
  def github_repos
    @repos = HTTParty.get(
      "https://api.github.com/users/#{github_login}/repos",
      headers: {
        "User-Agent": ENV["GITHUB_USER_AGENT"],
        "Authorization": "token #{ENV['GITHUB_PERSONAL_TOKEN']}"
      }
    )
  end

  # Valid login record from GitHub
  def github_login
    @response["login"]
  end
end
