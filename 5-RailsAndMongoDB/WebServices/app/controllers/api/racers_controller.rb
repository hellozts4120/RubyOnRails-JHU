# solution/app/controllers/api/racers_controller.rb
module Api
  class RacersController < ApplicationController

    protect_from_forgery with: :null_session

    def index
      if !request.accept || request.accept == "*/*"
        render plain: "/api/racers"
      else
        #real implementation ...
      end    
    end

    def show
      if !request.accept || request.accept == "*/*"
        render plain: "/api/racers/#{params[:id]}"
      else
        #real implementation ...
      end       
    end

    def entries
      if !request.accept || request.accept == "*/*"
        render plain: "/api/racers/#{params[:racer_id]}/entries"
      else
        #real implementation ...
      end         
    end

    def entries_detail
      if !request.accept || request.accept == "*/*"
        render plain: "/api/racers/#{params[:racer_id]}/entries/#{params[:id]}"
      else
        #real implementation ...
      end       
    end

  end
end