class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :team_name
      t.integer :good
      t.text :svg
      
      t.timestamps null: false
    end
  end
end
