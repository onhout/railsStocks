namespace :stock_db do
  desc "Resetting stocks db"
  task :reset => :environment do
    puts "Removing stock folder"
    FileUtils.rm_rf("./stock_data")
    puts "done."
  end
end
