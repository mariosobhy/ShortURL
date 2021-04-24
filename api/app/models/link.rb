class Link < ApplicationRecord
  ## Validations
  validates_presence_of :url
  validates_uniqueness_of :slug
  validates_length_of :url, within: 3..255, on: :create, message: "too long or too short"
  validates_length_of :slug, within: 3..255, on: :create, message: "too long or too short"

  ## Callbacks
  before_validation :generate_slug
  before_save :validate_url

  def short
    Rails.application.routes.url_helpers.short_url(slug: self.slug)
  end

  def validate_url
    data_matched = URI.regexp.match self.url
    unless data_matched.present?
      errors.add(:url, "Is not valid.")
      raise ActiveRecord::RecordInvalid.new(self)
    end
    true
  end

  def generate_slug
    self.slug = SecureRandom.uuid[0..5] if self.slug.nil? || self.slug.empty?
    true
  end

  def self.shorten(url)
    # return short when URL was created before
    link = Link.find_by_url(url)
    return link if link

    # create a new
    link = Link.new(url: url)
    return link
  end
end