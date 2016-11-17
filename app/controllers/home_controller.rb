class HomeController < ApplicationController
  def index
    @heros_names = Hero.all.map(&:name)
  end
end
