class CreateFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :filters do |t|

      t.timestamps
    end
  end
end
