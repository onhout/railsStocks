class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler
  attr_accessor :url
  protect_from_forgery with: :null_session
  layout 'application'

  def initialize
    super
  end

end
