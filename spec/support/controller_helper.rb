module Support
  module ControllerHelper
    def json_response
      @json_response ||= HashWithIndifferentAccess.new(JSON.parse(response.body))
    end
  end
end

RSpec.configure do |config|
  config.include Support::ControllerHelper, type: :controller
end
