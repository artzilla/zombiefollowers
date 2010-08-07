# Twitter Zombie Autofollowers

task :default => :build

desc "Build add-on XPI"
task :build do
  sh "rm -f twitter-zombies.xpi"
  sh "zip twitter-zombies.xpi -r chrome chrome.manifest content install.rdf"
  sh "cp content/twitter-zombies.js google-alarm.user.js"
end

desc "Build & open the XPI w/ Firefox (Mac-oriented)"
task :install => :build do
  sh "open -a Firefox twitter-zombies.xpi"
end

