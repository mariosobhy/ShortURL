FactoryBot.define do
  factory :link do
    url { Faker::Internet.url }
    slug { Faker::Internet.slug }
  end
end