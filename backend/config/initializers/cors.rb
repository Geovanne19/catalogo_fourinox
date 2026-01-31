Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*" # Em produção na Vercel, substituiremos pelo seu domínio real

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end