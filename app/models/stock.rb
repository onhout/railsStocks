class Stock < ApplicationRecord
  validates_presence_of :title, :description, :market
end
