class ChangeColumnSvg < ActiveRecord::Migration
  def change
    rename_column :parts, :picture_id, :svg_id
  end
end
