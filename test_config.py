import os
from dotenv import load_dotenv

load_dotenv()

print("=== CONFIGURATION TEST ===")
print("DB_HOST:", os.environ.get('DB_HOST'))
print("DB_PORT:", os.environ.get('DB_PORT'))
print("DB_NAME:", os.environ.get('DB_NAME'))
print("DB_USER:", os.environ.get('DB_USER'))
print("DB_PASSWORD:", "***" if os.environ.get('DB_PASSWORD') else "None")
print("==========================")

# Test de l'URI complète
db_user = os.environ.get('DB_USER')
db_password = os.environ.get('DB_PASSWORD')
db_host = os.environ.get('DB_HOST')
db_port = os.environ.get('DB_PORT')
db_name = os.environ.get('DB_NAME')

uri = f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
print("DATABASE URI:", uri)