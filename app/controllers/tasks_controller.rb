class TasksController < ApplicationController
  
  def index
    @tasks = Task.all
    @task = Task.new
  end

  def new
    @task = Task.new
  end

  # データベースへの保存を行うアクション
  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
  end

  private

    def task_params
      params.require(:task).permit(:title, :info, :date, :start_time, :end_time)
    end
end
