# Exemplo rápido de como remover fundo com Python
from rembg import remove
from PIL import Image

input_path = 'logo_com_fundo.png'
output_path = 'logo_transparente.png'

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)