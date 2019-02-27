# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

64.times do |object|
  id = object + 1
  User.create(
    {
      login: "username#{id}",
      login_type: "user",
      name: "Bibendum Ligula",
      bio: "Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      public_repos: 10,
      favorite_language: "ruby"
    }
  )
end
