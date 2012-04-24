class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, :city
      t.boolean :registration_type
      t.timestamps
    end
  end
end
