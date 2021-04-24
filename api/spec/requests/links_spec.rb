
RSpec.describe "/links", type: :request do
  let(:links_url) { '/links' }
  let(:valid_attributes) do
    {
      url: Faker::Internet.url,
      slug: Faker::Internet.slug
    }
  end

  let(:invalid_attributes) do
    {
      url: 'test',
      slug: ''
    }
  end
  let(:valid_headers) {
    {"CONTENT_TYPE" => "application/json"}
  }

#   describe "GET /show" do
#     it "renders a successful response" do
#       link = Link.create! valid_attributes
#       get link_url(link), as: :json
#       expect(response).to be_successful
#     end
#   end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a short Link" do
        puts valid_attributes
        expect {
          post "#{links_url}/create",
               params: valid_attributes, headers: valid_headers, as: :json
        }.to change(Link, :count).by(1)
      end

    #   it "renders a JSON response with the new link" do
    #     post links_url,
    #          params: { link: valid_attributes }, headers: valid_headers, as: :json
    #     expect(response).to have_http_status(:created)
    #     expect(response.content_type).to match(a_string_including("application/json"))
    #   end
    end

    context "with invalid parameters" do
      # it "does not create a short Link" do
      #   expect {
      #     post "#{links_url}/create",
      #     params: {:url=>"jamison", :slug=>""}, headers: valid_headers, as: :json
      #   }.to change(Link, :count).by(0)
      # end

      # it "renders a JSON response with errors for the new link" do
      #   post links_url,
      #        params: { link: invalid_attributes }, headers: valid_headers, as: :json
      #   expect(response).to have_http_status(:unprocessable_entity)
      #   expect(response.content_type).to eq("application/json")
      # end
    end
  end
end