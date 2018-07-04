class Stock < ApplicationRecord
  validates_presence_of :symbol, :name, :symbol_type

  def self.get_set(stock)
    st = find_or_initialize_by(symbol: stock['symbol'])
    # already defined self thereby no need for Stock/self.
    st.name = stock['name']
    st.symbol_type = stock['type']
    st.save
  end

  def self.find_stock(params)
    if params.key?(:q) && params[:q].present?
      q = Stock.ransack(symbol_or_name_cont: params[:q])
      q.result(distinct: true).limit(15)
    else
      { error: 'invalid search' }
    end
  end
end
