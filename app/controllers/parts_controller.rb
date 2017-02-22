class PartsController < ApplicationController
    def new
        @part = Part.create
    end
    
    def edit
        @part = Part.find(params[:id])
    end
    
    def update
        @part = Part.find(params[:id])
        redirect_to edit_part_path
    end
end
