class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.text :svg
      t.integer :parts_count
      t.string :color
      
      t.timestamps null: false
    end
  end
end
