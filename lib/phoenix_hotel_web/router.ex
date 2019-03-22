defmodule PhoenixHotelWeb.Router do
  use PhoenixHotelWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhoenixHotelWeb do
    pipe_through :browser

    put "/hotel/:id/:hotel", HotelController, :update
    post "/hotel", HotelController, :create
    delete "/hotel/:id", HotelController, :delete
    get "/create", HotelController, :create_page
    get "/hotel/:id", HotelController, :show
    get "/list_hotels", HotelController, :list_hotels
    get "/home", HotelController, :index
    get "/", HotelController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhoenixHotelWeb do
  #   pipe_through :api
  # end
end
