Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  default_url_options :host => "localhost:80"
  get '/s/:slug', to: 'links#show', as: :short
  post '/links/create', to: 'links#create'
end
