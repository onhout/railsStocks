class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout 'application'

  def hello
    render template: 'static_pages/home'
  end
end
