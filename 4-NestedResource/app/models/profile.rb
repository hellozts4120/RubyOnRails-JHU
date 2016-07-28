class Profile < ActiveRecord::Base
  belongs_to :user

  validate :first_name_and_last_name_not_null
  validate :boy_named_sue

  validates :gender, inclusion: { in: %w(male female),
  	message: "%{value} is not a valid gender" }

  def first_name_and_last_name_not_null
  	if first_name.nil? and last_name.nil?
  		errors.add(:first_name, "cannot both be null")
  	end
  end

  def boy_named_sue
  	if gender == 'male' and first_name == 'Sue'
  		errors.add(:gender, "Sue is a girl's name, sorry")
  	end
  end

  def self.get_all_profiles(min, max)
  	Profile.where('birth_year BETWEEN ? and ?', min, max).order(birth_year: :asc)

  end
end
