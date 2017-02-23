class PartsController < ApplicationController
    before_action :set_part, only: [:show]
    def new
        @part = Part.new
    end
    
    def edit
        @part = Part.find(params[:id])
    end
    
    def update
        @part = Part.find(params[:id])
        redirect_to new_part_path
    end
    
    def create 
        @color = Part.new(color_params)
        if @color.save
            redirect_to new_part_path
        else
            render 'new'
        end
    end
    
    private 
    def color_params
        params.require(:part).permit(:color)
    end
    def set_part
        @part = Picture.find(params[:id])
    end
end
