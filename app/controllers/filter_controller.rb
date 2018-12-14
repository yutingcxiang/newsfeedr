class FilterController < ApplicationController
  def recent
    @filters = Filter.select('*').order("created_at desc").limit(5)
    render json: @filters
  end

end
