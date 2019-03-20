defmodule PhoenixHotelWeb.HomeView do
  use PhoenixHotelWeb, :view

  def csrf_token() do
    Plug.CSRFProtection.get_csrf_token()
  end
end
