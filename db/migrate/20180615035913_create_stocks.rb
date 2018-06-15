class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :title
      t.string :description
      t.string :market

      t.timestamps
    end
  end
end
