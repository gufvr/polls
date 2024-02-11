# NLW Expert (Node.js)

An interactive voting platform enabling users to initiate polls while others participate by voting. The platform dynamically ranks the choices and updates the voting outcomes in real-time.

## Prerequisites

- Docker;
- Node.js;

## Configuration

- Install necessary dependencies (`npm install`);
- Set up PostgreSQL and Redis (`docker compose up -d`);
- Duplicate the `.env.example` file (`cp .env.example .env`);
- Launch the application (`npm run dev`);
- Validate it! (I personally suggest using [Hoppscotch](https://hoppscotch.io/)).

## HTTP

### POST `/polls`

Initiate a new poll.

#### Request body

```json
{
  "title": "Qual o melhor framework Node.js?",
  "options": [
    "Express",
    "Fastify",
    "NestJS",
    "HapiJS"
  ]
}
```

#### Response body

```json
{
  "pollId": "194cef63-2ccf-46a3-aad1-aa94b2bc89b0"
}
```

### GET `/polls/:pollId`

Retrieve data for a single poll.

#### Response body

```json
{
	"poll": {
		"id": "e4365599-0205-4429-9808-ea1f94062a5f",
		"title": "Qual o melhor framework Node.js?",
		"options": [
			{
				"id": "4af3fca1-91dc-4c2d-b6aa-897ad5042c84",
				"title": "Express",
				"score": 1
			},
			{
				"id": "780b8e25-a40e-4301-ab32-77ebf8c79da8",
				"title": "Fastify",
				"score": 0
			},
			{
				"id": "539fa272-152b-478f-9f53-8472cddb7491",
				"title": "NestJS",
				"score": 0
			},
			{
				"id": "ca1d4af3-347a-4d77-b08b-528b181fe80e",
				"title": "HapiJS",
				"score": 0
			}
		]
	}
}
```

### POST `/polls/:pollId/votes`

Submit a vote for a specific poll.

#### Request body

```json
{
  "pollOptionId": "31cca9dc-15da-44d4-ad7f-12b86610fe98"
}
```

## WebSockets

### ws `/polls/:pollId/results`

#### Message

```json
{
  "pollOptionId": "da9601cc-0b58-4395-8865-113cbdc42089",
  "votes": 2
}
```
