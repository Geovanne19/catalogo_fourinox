Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://catalogo-fourinox.vercel.app'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put, :options]
  end
end