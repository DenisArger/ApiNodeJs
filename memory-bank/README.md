# Memory Bank

## Summary
ApiNodeJs — небольшой Express?сервис для сохранения и получения JSON?документов в Supabase. Сервис генерирует 6?символьные id, сохраняет JSON в таблицу `jsons_tb` и возвращает данные по id. Одновременно раздаётся статика из `assets` и `index.html`.

## Runtime
Запуск: `node express.js`.
Порт: `3000`.

## Environment
Требуются переменные:
`SUPABASE_URL` — URL проекта Supabase.
`SUPABASE_KEY` — API ключ Supabase.

## API Surface
`GET /` — отдаёт `index.html`.
`GET /get` — 400, `empty id`.
`GET /get/:id` — возвращает JSON или 400/404.
`POST /generate` — сохраняет JSON, возвращает `status` и `id`.

## Data Model
Таблица: `jsons_tb`.
Колонки: `id` (text/varchar, уникальный), `data` (json/jsonb).

## Key Files
`express.js` — маршруты и запуск сервера.
`supabase.js` — операции Supabase.
`generatorId.js` — генерация id.
`assets/` — статические файлы.
`index.html` — главная страница.

## Notes
CORS включён по умолчанию.
`GET /get/:id` требует ровно 6 символов.
