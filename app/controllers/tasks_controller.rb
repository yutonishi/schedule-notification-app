class TasksController < ApplicationController
  protect_from_forgery
  def index
    @tasks = Task.all
    @task = Task.new
  end

  # データベースへの保存を行うアクション
  def create
    @task = Task.new(task_params)
    @task.save
    @tasks = Task.all
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
  end

  private

    def task_params
      params.require(:task).permit(:title, :info, :start_time, :notification).merge(user_id: session[:user_id])
    end
end
