FROM node:latest

# Устанавливаем PostgreSQL клиента
RUN apt-get update && apt-get install -y postgresql-client

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY package*.json ./
RUN npm install

# Копируем исходные файлы
COPY . .

# Открываем порт
EXPOSE 1001

# Запускаем приложение
CMD ["npm", "run", "start:prod"]
