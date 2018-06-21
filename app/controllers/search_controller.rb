class SearchController < ApplicationController
  def find
    json_response(Stock.find_stock(params))
  end
end
