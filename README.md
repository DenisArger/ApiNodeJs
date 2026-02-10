# ApiNodeJs

## Описание
ApiNodeJs — небольшой HTTP?сервис на Express для сохранения и получения JSON?документов в Supabase. Сервис принимает произвольный JSON, сохраняет его в таблицу `jsons_tb`, генерирует короткий идентификатор длиной 6 символов и позволяет получать сохранённый JSON по этому идентификатору. Одновременно раздаётся статический контент из папки `assets` и HTML?страница `index.html` по корневому маршруту.

## Возможности
- Генерация короткого id (6 символов, `nanoid`).
- Сохранение JSON в Supabase.
- Получение JSON по id.
- CORS включён по умолчанию.

## API
### `GET /`
Возвращает `index.html`.

### `GET /get`
Возвращает ошибку `400` с сообщением `empty id`.

### `GET /get/:id`
Возвращает сохранённый JSON по id. Если длина id не 6 символов — `400` (`incorrect id`). Если объект не найден — `404` (`not object`).

### `POST /generate`
Сохраняет JSON в Supabase и возвращает `status` и сгенерированный `id`. Если тело отсутствует — `400` (`no body`). Если тело не JSON или пустой объект — `400`.

Пример:
```bash
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{"hello":"world"}'
```

Ответ:
```json
{ "status": 201, "id": "a1B2c3" }
```

Получение:
```bash
curl http://localhost:3000/get/a1B2c3
```

## Требования
Node.js 16+.
Проект Supabase с таблицей `jsons_tb`.
Колонка `id` (text/varchar, уникальное значение).
Колонка `data` (json/jsonb).

## Настройка
1. Установите зависимости.
```bash
npm install
```
2. Скопируйте файл `.env.example` в `.env` и укажите ключи.
```env
SUPABASE_URL="..."
SUPABASE_KEY="..."
```

## Запуск
```bash
node express.js
```
Сервер стартует на `http://localhost:3000`.

## Структура проекта
`express.js` — HTTP?сервер и маршруты API.
`supabase.js` — интеграция с Supabase.
`generatorId.js` — генерация коротких id.
`assets/` — статика.
`index.html` — главная страница.
