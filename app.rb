require 'sinatra'

class Website < Sinatra::Base

  get '/' do
    erb(:website)
  end

  run! if app_file == $0

end
