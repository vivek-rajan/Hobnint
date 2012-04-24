class User < ActiveRecord::Base
  
  RegistrationType = {:student => 0, :tutor => 1}
  
  has_many :interests_users
  has_many :interests, :through => :interests_users
  
  validates :email, :city, :presence => true
  validates :email, :uniqueness => {:allow_blank => true},
                    :format => {:with => RegExp[:email], :allow_blank => true}
  
end