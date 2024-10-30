# READ ME

This npm package helps you fetch JSON data from the Sessionize API.
It is typed and we use Zod to validate the data.

If there is a problem with the types, please open an issue, or better yet, a PR.
Zod will log an error if the data is not as expected.
But it will still return the data, so you can handle it on your side if you want.

## How to use

```typescript
import { getSessions } from 'sessionize_api';

// SESSIONIZE_KEY is your sessionize API key
const sessions = await getSessions(SESSIONIZE_KEY);
```

## Available functions

- `getAll`: fetches all data
- `getScheduleGrid`: fetches the schedule grid
- `getSessions`: fetches all sessions
- `getSpeakers`: fetches all speakers
- `getSpeakerWall`: fetches the speaker wall
