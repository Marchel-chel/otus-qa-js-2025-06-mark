FROM node:22.17.1

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json внутрь контейнера
COPY package.json package-lock.json ./

# Устанавливаем зависимости проекта
RUN npm ci

# Копируем все остальные файлы проекта внутрь контейнера
COPY . .

# По умолчанию запускаем тесты
CMD ["npm", "test"]