FactoryBot.define do
  factory :stock do
    symbol {Faker::Lorem.word}
    name {Faker::Lorem.sentence(word_count = 40)}
    symbol_type {Faker::Pokemon.location}
  end
end
