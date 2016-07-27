class TodoItem < ActiveRecord::Base

    def self.completed
        self.where(completed: true).count
    end

end
