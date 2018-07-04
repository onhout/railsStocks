require 'rails_helper'

RSpec.describe "Stocks API", type: :request do

  let!(:stocks) { create_list(:stock, 10) }
  let(:stock_id) { stocks.first.id }

  # Test suite for GET /stocks
  describe 'GET /stocks' do
    # make HTTP get request before each example
    before { get '/stocks' }

    it 'returns stocks' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /stocks/:id
  describe 'GET /stocks/:id' do
    before { get "/stocks/#{stock_id}" }

    context 'when the record exists' do
      it 'returns the stock' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(stock_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:stock_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Stock/)
      end
    end
  end

  # Test suite for POST /stocks
  describe 'POST /stocks' do
    # valid payload
    let(:valid_attributes) { { symbol: 'AAPL', name: 'blah blah blah', symbol_type: 'NASDAQ' } }

    context 'when the request is valid' do
      before { post '/stocks', params: valid_attributes }

      it 'creates a stock' do
        expect(json['symbol']).to eq('AAPL')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/stocks', params: { symbol: 'Foobar' } }

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/{\"message\":\"Validation failed: Name can't be blank, Symbol type can't be blank\"}/)
      end
    end
  end

  # Test suite for PUT /stocks/:id
  describe 'PUT /stocks/:id' do
    let(:valid_attributes) { { symbol: 'MSFT' } }

    context 'when the record exists' do
      before { put "/stocks/#{stock_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /stocks/:id
  describe 'DELETE /stocks/:id' do
    before { delete "/stocks/#{stock_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end