class PicturesController < ApplicationController
  before_action :set_picture, only: [:show]
    
    def index
        @pictures = Picture.all
    end
    
    def show
        @picture = Picture.find(params[:id])
        @parts = @picture.parts
        #保存された色をfillの中に入れてあげる
        @color = @picture.parts.color
    end
    
    
    def new
        @picture = Picture.new
    end

    def create
        @picture = Picture.new
        @picture.save
        redirect_to root_url
    end
    
    private
    def set_picture
        @picture = Picture.find(params[:id])
    end
end
