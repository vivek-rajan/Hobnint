class PagesController < ApplicationController
  def index
  end

  def create
    respond_to do |format|
      format.html {render 'index.html.erb'}
      format.js {render 'create.js.erb'}
    end
  end

end
