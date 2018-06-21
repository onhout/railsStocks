require 'prawn'
require 'net/http'

class MainController < ApplicationController

  def index
    render template: 'main/index'
  end

  def reports
    send_data(generate_pdf, filename: "report.pdf", type: "application/pdf")
  end

  def generate_pdf
    gainer_res = Net::HTTP.get(URI('https://api.iextrading.com/1.0/stock/market/list/gainers'))
    loser_res = Net::HTTP.get(URI('https://api.iextrading.com/1.0/stock/market/list/losers'))

    Prawn::Document.new do
      gainer = JSON.parse(gainer_res)
      loser = JSON.parse(loser_res)

      text "<font size='24'> Top Gainers </font>", inline_format: true, align: :center
      gainer.each() do |list|
        float do
          bounding_box [15, cursor], width: 10 do
            text "*"
          end
        end

        bounding_box [25, cursor], width: 600 do
          text "#{list["symbol"]} - #{list["companyName"]}"
          text "Exchange: #{list["primaryExchange"]} | Sector: #{list["sector"]}"
          text "Open: $#{list["open"]}, High: $#{list["high"]} , Low: $#{list["low"]} , Close: $#{list["close"]}"
          text "PERCENT CHANGE: <color rgb='006400'> #{(list["changePercent"] * 100).round(3)}% </color>", inline_format: true
        end
        move_down(5)
      end
      start_new_page
      text "<font size='24'> Top Losers </font>", inline_format: true, align: :center
      loser.each() do |list|
        float do
          bounding_box [15, cursor], width: 10 do
            text "*"
          end
        end

        bounding_box [25, cursor], width: 600 do
          text "#{list["symbol"]} - #{list["companyName"]}"
          text "Exchange: #{list["primaryExchange"]} | Sector: #{list["sector"]}"
          text "Open: $#{list["open"]}, High: $#{list["high"]} , Low: $#{list["low"]} , Close: $#{list["close"]}"
          text "PERCENT CHANGE: <color rgb='8B0000'> #{(list["changePercent"] * 100).round(3)}% </color>", inline_format: true
        end
        move_down(5)
      end
    end.render
  end

  def update_stock_db
    stocks_symbol_url = URI.parse('https://api.iextrading.com/1.0/ref-data/symbols')
    stock_hash = JSON.parse Net::HTTP.get(stocks_symbol_url)
    stock_hash.each do |stock|
      Stock.get_set(stock)
    end
    json_response({message: "Success"})
  end

  def reset_stock_data
    FileUtils.rm_rf("./stock_data")
    json_response({message: "Success"})
  end
end
