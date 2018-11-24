class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :name
      t.string :title
      t.string :author
      t.string :description
      t.string :url
      t.string :urlToImage
      t.datetime :publishedAt
      t.string :content
      t.timestamps
    end
  end
end
