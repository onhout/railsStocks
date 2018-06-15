class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler
  protect_from_forgery with: :null_session
  layout 'application'

  def hello
    render html: "jello"
  end
end
