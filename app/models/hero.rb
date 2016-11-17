class Hero < ApplicationRecord
  has_many :parameters, inverse_of: :hero
  has_many :base_parameters, -> { where(type: "BaseParameter") }
end
