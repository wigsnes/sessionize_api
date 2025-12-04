# Sessionize API

A TypeScript package for fetching and validating data from the [Sessionize API](https://sessionize.com). This package provides fully typed functions with Zod schema validation for all Sessionize API endpoints.

## Features

- ✅ **Fully typed** - Complete TypeScript types for all Sessionize data structures
- ✅ **Schema validation** - Uses Zod to validate API responses
- ✅ **Type-safe** - All functions return properly typed data
- ✅ **Error handling** - Graceful handling of validation errors (logs warnings but still returns data)

## Installation

```bash
npm install sessionize_api
# or
pnpm add sessionize_api
# or
yarn add sessionize_api
```

## Quick Start

```typescript
import { getSessions, getSpeakers, getAll } from 'sessionize_api';

// Get your API key from Sessionize event settings
const SESSIONIZE_KEY = 'your-api-key-here';

// Fetch all sessions
const sessions = await getSessions(SESSIONIZE_KEY);

// Fetch all speakers
const speakers = await getSpeakers(SESSIONIZE_KEY);

// Or fetch everything at once
const allData = await getAll(SESSIONIZE_KEY);
```

## API Reference

### Functions

#### `getAll(key: SessionizeKey): Promise<SessionizeAll>`

Fetches all Sessionize data including sessions, speakers, and schedule information in a single request.

**Parameters:**

- `key` - Your Sessionize API key (string)

**Returns:** Promise resolving to `SessionizeAll` object containing all event data

**Example:**

```typescript
import { getAll } from 'sessionize_api';
const allData = await getAll('your-api-key');
```

#### `getSessions(key: SessionizeKey): Promise<SessionGroups>`

Fetches all sessions organized by session groups/categories.

**Parameters:**

- `key` - Your Sessionize API key (string)

**Returns:** Promise resolving to `SessionGroups` array

**Example:**

```typescript
import { getSessions } from 'sessionize_api';
const sessions = await getSessions('your-api-key');
// sessions is an array of SessionGroup objects
```

#### `getSpeakers(key: SessionizeKey): Promise<Speakers>`

Fetches all speakers with their profile information and associated sessions.

**Parameters:**

- `key` - Your Sessionize API key (string)

**Returns:** Promise resolving to `Speakers` array

**Example:**

```typescript
import { getSpeakers } from 'sessionize_api';
const speakers = await getSpeakers('your-api-key');
```

#### `getScheduleGrid(key: SessionizeKey): Promise<Schedules>`

Fetches schedule data formatted as a grid, suitable for displaying event schedules.

**Parameters:**

- `key` - Your Sessionize API key (string)

**Returns:** Promise resolving to `Schedules` object

**Example:**

```typescript
import { getScheduleGrid } from 'sessionize_api';
const schedule = await getScheduleGrid('your-api-key');
```

#### `getSpeakerWall(key: SessionizeKey): Promise<SpeakersWall>`

Fetches speaker data formatted for displaying a speaker wall or gallery view.

**Parameters:**

- `key` - Your Sessionize API key (string)

**Returns:** Promise resolving to `SpeakersWall` object

**Example:**

```typescript
import { getSpeakerWall } from 'sessionize_api';
const speakerWall = await getSpeakerWall('your-api-key');
```

### Types

All TypeScript types are exported from the package. Key types include:

- `SessionizeKey` - Type alias for API key (string)
- `SessionizeAll` - Complete data structure from getAll()
- `SessionGroups` - Array of session groups from getSessions()
- `Speakers` - Array of speaker objects from getSpeakers()
- `Schedules` - Schedule data from getScheduleGrid()
- `SpeakersWall` - Speaker wall data from getSpeakerWall()
- `Session`, `SessionGroup`, `Speaker`, and other related types

**Example:**

```typescript
import type { Session, SessionGroup, Speakers } from 'sessionize_api';

const sessions: SessionGroup[] = await getSessions(key);
const speakers: Speakers = await getSpeakers(key);
```

## Using Zod Schemas with JSON Files

If you have Sessionize data stored as JSON files, you can use the exported Zod schemas to validate and type your data:

```typescript
import {
  parseJsonFile,
  safeParseJsonFile,
  SessionsSchema,
  SpeakersSchema,
  SessionizeAllSchema,
} from 'sessionize_api';
import fs from 'fs';

// Strict validation (throws on error)
const sessionsData = JSON.parse(fs.readFileSync('sessions.json', 'utf-8'));
const sessions = parseJsonFile(sessionsData, SessionsSchema);
// sessions is now typed as SessionGroups

// Safe validation (logs warnings, returns data even if invalid)
const speakersData = JSON.parse(fs.readFileSync('speakers.json', 'utf-8'));
const speakers = safeParseJsonFile(speakersData, SpeakersSchema);
// speakers is typed as Speakers
```

### Available Zod Schemas

All Zod schemas are exported and can be used for validation:

- `SessionizeAllSchema` - Validates complete Sessionize data
- `SessionsSchema` - Validates session groups
- `SpeakersSchema` - Validates speakers array
- `ScheduleSchema` - Validates schedule grid data
- `SpeakersWallSchema` - Validates speaker wall data

### Helper Functions

#### `parseJsonFile<T>(jsonData: unknown, schema: ZodType<T>): T`

Strictly validates JSON data against a schema. Throws an error if validation fails.

#### `safeParseJsonFile<T>(jsonData: unknown, schema: ZodType<T>): T`

Safely validates JSON data. Logs warnings but returns data even if validation fails (same behavior as the API functions).

## Schema Validation

This package uses Zod for runtime validation. If the API returns data that doesn't match the expected schema:

- A warning will be logged to the console with validation errors
- The function will still return the data (as `unknown` cast to the expected type)
- You can handle validation errors on your side if needed

## Getting Your API Key

1. Log in to [Sessionize](https://sessionize.com)
2. Navigate to your event settings
3. Find your API key in the API/Integration section
4. Use this key with all functions in this package

## Contributing

If you find issues with types or schemas, please:

1. Open an issue describing the problem
2. Or better yet, submit a PR with the fix

## License

MIT
