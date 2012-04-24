class Interest < ActiveRecord::Base
  
  has_many :interests_users
  has_many :users, :through => :interests_users
  
  validate :title, :presence => true
  
end