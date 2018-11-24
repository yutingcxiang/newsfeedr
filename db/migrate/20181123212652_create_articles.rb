class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :name
      t.string :title
      t.string :description
      t.string :url
      t.datetime :publishedAt
      t.timestamps
    end
  end
end
