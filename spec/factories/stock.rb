FactoryBot.define do
  factory :stock do
    title {Faker::Lorem.word}
    description {Faker::Lorem.sentence(word_count = 40)}
    market {Faker::Pokemon.location}
  end
end
