require "rails_helper"

RSpec.describe LinksController, type: :routing do
  describe "routing" do
    it "routes to #show" do
      expect(get: "/s/test").to route_to(controller: "links", action: "show", slug: "test")
    end
    it "routes to #create" do
      expect(post: "/links/create").to route_to("links#create")
    end
  end
end