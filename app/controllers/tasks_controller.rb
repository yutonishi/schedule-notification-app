class TasksController < ApplicationController
  def index
    @tasks = Task.all
    @task = Task.new
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.user_id = current_user.id
    @task.save
    @tasks = Task.all
    render @tasks
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    @tasks = Task.all
    render @tasks
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    @tasks = Task.all
    render @tasks
  end

  private

    def task_params
      params.require(:task).permit(:title, :info, :start_time, :notification)
    end
end
