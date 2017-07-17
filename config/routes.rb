Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    unauthenticated :user do
      root :to => 'devise/registrations#new'
    end
  end

end
