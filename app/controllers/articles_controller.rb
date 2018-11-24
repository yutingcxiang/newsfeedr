class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles, status: 200
  end

  def show
    @article = Article.find(params[:id])
    render json: @article, status: 200
  end

  private

  def article_params
    params.require(:article).permit(:source => [:name], :title, :description, :url, :publishedAt)
  end
end
