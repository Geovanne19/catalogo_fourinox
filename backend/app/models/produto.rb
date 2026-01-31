class Produto < ApplicationRecord
  # Define que o produto tem uma foto anexada
  has_one_attached :foto

  validates :nome, :categoria, presence: true

  def as_json(options = {})
    # Retorna os dados e a URL da foto se ela existir
    super(options).merge({
      foto_url: foto.attached? ? Rails.application.routes.url_helpers.rails_blob_path(foto, only_path: true) : nil
    })
  end
end