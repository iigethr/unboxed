# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string  :name
      t.text    :bio
      t.integer :public_repos
      t.string  :favorite_language

      t.timestamps
    end
  end
end
