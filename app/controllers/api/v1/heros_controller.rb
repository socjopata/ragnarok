module Api
  module V1
    class HerosController < BaseController
      include Roar::Rails::ControllerAdditions
      respond_to :json

      def index
        heros = Hero.all
        respond_with heros
      end
    end
  end
end
