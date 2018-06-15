class Stock < ApplicationRecord
  validates_presence_of :symbol, :name, :symbol_type
end
