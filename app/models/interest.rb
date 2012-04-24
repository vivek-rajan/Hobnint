class Interest < ActiveRecord::Base
  
  has_many :interests_users
  has_many :users, :through => :interests_users
  
  validate :title, :presence => true, :uniqueness => {:allow_blank => true}

  scope :default, where(:is_custom => false)
  
end