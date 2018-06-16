require 'prawn'

class MainController < ApplicationController

  def index
    render template: 'main/index'
  end

  def reports
    send_data(generate_pdf, :filename => "report.pdf", :type => "application/pdf")
  end

  def generate_pdf
    Prawn::Document.new do
      text "Hello World"
    end.render
  end

  def update_stock_db
    stocks_symbol_url = URI.parse('https://api.iextrading.com/1.0/ref-data/symbols')
    stock_hash = JSON.parse Net::HTTP.get(stocks_symbol_url)
    stock_hash.each do |stock|
      st = Stock.find_or_initialize_by(symbol: stock["symbol"])
      st.name = stock["name"]
      st.symbol_type = stock["type"]
      st.save
    end
    json_response({message: "Success"})
  end
end
