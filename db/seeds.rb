15.times do
  Post.create(
    name: Faker::GreekPhilosophers.name,
    date: Faker::Date.backward(14),
    body: Faker::GreekPhilosophers.quote
  )
end

puts "have some blog"