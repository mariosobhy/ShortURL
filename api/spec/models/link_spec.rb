require 'rails_helper'

RSpec.describe Link, type: :model do
  # Validation tests
  # ensure columns url present before saving
  it { should validate_presence_of(:url) }
  # ensure columns slug uniqueness before saving
  it { should validate_uniqueness_of(:slug) }
end
