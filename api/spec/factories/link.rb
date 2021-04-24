FactoryBot.define do
  factory :link do
    url { Faker::Internet.url }
    num_of_clicks { 0 }
    slug { Faker::Internet.slug }
  end
end