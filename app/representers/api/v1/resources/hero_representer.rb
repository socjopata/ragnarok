module Api
  module V1
    module Resources
      module HeroRepresenter
        include Roar::JSON
        property :type
        property :id

        nested :attributes do
          property :name
        end

        def type
          "heros"
        end
      end
    end
  end
end
