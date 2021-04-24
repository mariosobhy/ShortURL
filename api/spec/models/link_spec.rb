require 'rails_helper'

RSpec.describe Link, type: :model do
  # Validation tests
  # ensure columns url present before saving
  it { should validate_presence_of(:url) }
  # ensure callbacks are called
  it { is_expected.to callback(:validate_url).before(:save) }
  it { is_expected.to callback(:generate_slug).before(:validation) }
end
