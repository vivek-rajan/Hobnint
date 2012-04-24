class CreateInterestsUsers < ActiveRecord::Migration
  def change
    create_table :interests_users do |t|
      t.integer :interest_id, :user_id
      t.timestamps
    end
  end
end
