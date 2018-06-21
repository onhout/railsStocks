class Stock < ApplicationRecord
  validates_presence_of :symbol, :name, :symbol_type

  def self.get_set(stock)
    st = Stock.find_or_initialize_by(symbol: stock["symbol"])
    st.name = stock["name"]
    st.symbol_type = stock["type"]
    st.save
  end
end
