class AddColumnSvg < ActiveRecord::Migration
  def change
    add_reference :pictures, :svg, index: true
  end
end
