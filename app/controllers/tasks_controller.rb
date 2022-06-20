class TasksController < ApplicationController
  before_action :set_beginning_of_week
  before_action :authenticate_user!

  def index
    @tasks = Task.belong_user(current_user.id)
    @task = Task.new
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
    @tasks = Task.belong_user(current_user.id)
    render @task
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params) 
    @tasks = Task.belong_user(current_user.id)
    render @task
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    @tasks = Task.belong_user(current_user.id)
    render @task
  end

  private

    def task_params
      params.require(:task).permit(:title, :info, :start_time, :notification)
    end

    def set_beginning_of_week
      Date.beginning_of_week = :sunday
    end
end
