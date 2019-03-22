defmodule PhoenixHotelWeb.HotelView do
  use PhoenixHotelWeb, :view
  alias PhoenixHotelWeb.HotelView

  def render("list_all.json", %{hotels: hotels}) do
    %{data: render_many(hotels, HotelView, "hotel.json")}
  end

  def render("list_one.json", %{hotel: hotel}) do
    %{data: render_one(hotel, HotelView, "hotel.json")}
  end

  def render("hotel.json", %{hotel: hotel}) do
    %{id: hotel.id, name: hotel.name, location: hotel.location, capacity: hotel.capacity}
  end

  def render(conn, "create_hotel.html") do
  end

  def csrf_token() do
    Plug.CSRFProtection.get_csrf_token()
  end
end
