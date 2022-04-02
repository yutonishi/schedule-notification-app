class Task < ApplicationRecord
  belongs_to :user

  scope :belong_user, -> (user_id) { where(user_id: user_id )}
end
