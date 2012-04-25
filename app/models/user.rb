class User < ActiveRecord::Base

  attr_accessor :other_interests
  
  RegistrationType = {:student => 0, :tutor => 1}
  
  has_many :interests_users
  has_many :interests, :through => :interests_users
  
  validates :email, :city, :presence => true
  validates :email, :uniqueness => {:allow_blank => true},
    :format => {:with => RegExp[:email], :allow_blank => true}
  after_create :add_other_interests

  private

  def add_other_interests
    if other_interests
      interest = Interest.find(:first, :conditions => ["lower(title) = ?", other_interests.downcase])
      if interest
        self.interests << interest
      else
        self.interests.create(:title => other_interests, :is_custom => true)
      end
    end
  end

end