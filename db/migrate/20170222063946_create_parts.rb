class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.integer :team_id
      t.integer :picture_id
      t.integer :cell_number
      t.integer :color
      t.text :path
       
      t.timestamps null: false
    end
  end
end
