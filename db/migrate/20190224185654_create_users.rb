# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # GitHub Info
      t.string  :login
      t.string  :login_type
      t.string  :name
      t.text    :bio
      t.integer :public_repos
      t.string  :avatar_url
      t.string  :gravatar_id
      # Processed by app
      t.string  :favorite_language

      t.timestamps
    end
  end
end
