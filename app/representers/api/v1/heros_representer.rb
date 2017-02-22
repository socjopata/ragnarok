module Api
  module V1
    module HerosRepresenter
      include Roar::JSON
      collection :data, extend: Resources::HeroRepresenter, wrap: false

      def data
        self
      end
    end
  end
end
