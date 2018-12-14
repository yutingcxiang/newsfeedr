class CreateFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :filters do |t|
      t.string :query
      t.integer :page
      t.timestamps
    end
  end
end
