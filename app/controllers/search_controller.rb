class SearchController < ApplicationController

  def find
    if (params.has_key?(:q) && params[:q].present?)
      @q = Stock.ransack(symbol_or_name_cont: params[:q])
      res = @q.result(distinct: true).limit(10)
      json_response(res)
    else
      json_response({error: "invalid search"})
    end

  end

end
