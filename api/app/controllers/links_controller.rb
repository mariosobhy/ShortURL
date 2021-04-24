class LinksController < ApplicationController
  def show
    @link = Link.find_by_slug(params[:slug])
    render json: { message: 'Link Not Found' }, status: 404 if @link.nil?
    @link.update_attribute(:num_of_clicks, @link.num_of_clicks + 1)
    redirect_to @link.url
  end

  def create
    @url = params[:url]
    @link = Link.shorten(@url)
    if @link.save
      render json: { shorten_url: @link.short, original_url: @link.url }, status: :created
    else
      render json: @link.errors, status: :unprocessable_entity
    end
  end
end
