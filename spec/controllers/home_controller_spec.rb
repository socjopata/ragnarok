require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe '#index' do
    context 'first page' do
      before { get :index }

      it { expect(response).to render_template(:index) }
    end
  end
end
