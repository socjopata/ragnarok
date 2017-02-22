require 'rails_helper'

RSpec.describe Api::V1::HerosController, type: :controller do
  describe '#index' do
    it "fetches the heros collection" do
      hero = create(:hero)

      xhr :get, :index

      expect(json_response[:data]).to match_array [
        hash_including(
          id: hero.id,
          type: "heros",
          attributes: { name: "Valkiria" }
        )
      ]
    end
  end
end
