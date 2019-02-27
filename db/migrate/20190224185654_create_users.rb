# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      # Lets add login and use this the same way as github
      t.string  :name
      t.text    :bio
      t.integer :public_repos
      t.string  :favorite_language
      ## avatar_url
      ## Lets add login type
      ## user or organization?

      t.timestamps
    end
  end
end
