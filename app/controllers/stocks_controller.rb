require "alphavantagerb"
require "json"

class StocksController < ApplicationController
  before_action :set_stock, only: [:show, :edit, :update, :destroy]

  def initialize
    @alphavantage_client = Alphavantage::Client.new key: "VRU8ZUMHTKPXMW15"
    super()
  end

  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.all
    json_response(@stocks)
  end

  # GET /stocks/1
  # GET /stocks/1.json
  def show
    stock = @alphavantage_client.stock symbol: @stock.symbol
    interval = params[:interval].presence || "5min"
    data_path = "./stock_data/#{@stock.symbol}-#{interval}.json"
    Dir.mkdir('./stock_data') unless Dir.exist?('./stock_data')
    if !File.exist?(data_path)
      timeseries = stock.timeseries type: "intraday", interval: interval, outputsize: "full"
      File.open(data_path, 'w') do |file|
        file.write(timeseries.hash.to_json)
        json_response(timeseries.hash)
      end
    else
      timeseries = File.read(data_path)
      json_response(timeseries)
    end
  end

  # GET /stocks/new
  def new
    @stock = Stock.new
    json_response(@stock)
  end

  # GET /stocks/1/edit
  def edit
  end

  # POST /stocks
  # POST /stocks.json
  def create
    @stock = Stock.create!(stock_params)
    json_response(@stock, :created)

  end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    if @stock.update(stock_params)
      head :no_content
    end
  end

  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_stock
    @stock = Stock.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def stock_params
    params.permit(:symbol, :name, :symbol_type)
  end
end
