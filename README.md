# Duckumentation :duck:
Konglig Datasektionens API-specifikationer

# Hantera API:er
## Lägga till API-specifikationer
För att lägga till en API-specifikation måste ändringar göras både i frontend och backend. Utöver detta måste du också redigera API-specifikationsfilen för duckumentation :100: Denna finns under `server/specifications/duckumentation.yml`.

### Backend
1. Lägg till OpenAPI-specifikationsfilen i `server/specifications`.

### Frontend
I `client/src/App.js`, gör fäljande:
- Lägg till ett objekt i `links`-arrayen:
    ```js
    { label: "Label", to: "/path", api: "/api/apipath" }
    ```
    - `/api/apipath` ska vara den path:en som definierades på backenden.
    - `to`s värde måste vara unik

## Redigera API-specifikation
Redigera specifikationsfilen du vill ändra och gör en PR. Specifikationsfilerna ligger under `server/specifications`.

# Miljövariabler (environment variables)
### Klient
Redigera `.env.development`-filen under `client/` för att definiera miljövariabler.
| Namn | Standardvärde | Beskrivning |
|----- | ------------- | ----------- |
| REACT_APP_BASE_URL | http://localhost:5000 | Path till backenden |

### Server
Skapa en `.env`-fil under `server/` för att definiera miljövariabler.
| Namn | Standardvärde | Beskrivning |
|----- | ------------- | ----------- |
| NODE_ENV | development | - |
| PORT | 5000 | - |

# Systemberoenden och Pls-permission
Detta system beror inte på något annat system. Detta system har inga pls-permissions.

# Köra programmet
## Lokalt
1. Klona detta repo
2. Installera dependencies
    - Under `client/`, kör:
    `npm install`
    - Under `server/`, kör:
    `npm install`
3. Kör frontend
    - Under `client/`, kör:
    `npm start`
    frontenden serveras på http://localhost:3000
3. Kör backend
    - Under `server/`, kör:
    `npm run dev`
    backenden serveras på http://localhost:5000

## Produktion
1. Klona detta repo
2. Installera dependencies
    - Under `client/`, kör:
    `npm install`
    - Under `server/`, kör:
    `npm install`
3. Bygg frontend
    - Under `client/`, kör:
    `npm run build`
3. Kör backend
    - Under `server/`, kör:
    `npm start`

Backenden serveras på port 5000 om inget annat är angett.
Frontenden serveras på `/`, API:et på `/api/...`


