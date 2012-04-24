class AddIsCustomToInterests < ActiveRecord::Migration
  def change
    add_column :interests, :is_custom, :boolean, :default => false
  end
end
