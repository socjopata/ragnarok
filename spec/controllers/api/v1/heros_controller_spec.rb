require 'rails_helper'

RSpec.describe Api::V1::HerosController, type: :controller do
  describe '#index' do
    it "fetches the heros collection" do
      create(:hero)

      xhr :get, :index

      expect(json_response[:data]).to eq []
    end
  end
end
