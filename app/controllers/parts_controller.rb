class PartsController < ApplicationController
    def new
        @part = Part.new
        @part.color = params[:color]
        puts params
    end
    
    def edit
        @picture = Picture.find()
        @part = Part.find(params[:id])
        puts "--------------------"
        puts @part.cell_number
        puts "--------------------"
    end
    
    def update
        @part = Part.find(params[:id])
        redirect_to new_part_path
    end
    private 
    def color_params
        params.require(:part).permit(:color)
    end
end
