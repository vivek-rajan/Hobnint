# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

['Subjects', 'Sports', 'Computer & Software', 'Music Theatre & Dance', 'Arts & Handicrafts', 'Health & Fitness',
'Cooking & Nutrition', 'Makeup & Grooming', 'Foreign Languages', 'Matrial Arts', 'Others'].each do |interest|
  Interest.create(:title => interest)
end