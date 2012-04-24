class UsersController < ApplicationController
  
  def create
    @user = User.new(params[:user])
    @user.save
    puts @user.errors.messages
  end
  
end