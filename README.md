# READ ME

This npm package helps you fetch JSON data from the Sessionize API. It is typed and we use Zod to validate the data.

If there is a problem with the types, please open an issue, or better yet, a PR. Zod will log an error if the data is not as expected. But it will still return the data, so you can handle it on your side if you want.

## How to use

```typescript
import { SessionizeClient } from "sessionize-api";

// SESSIONIZE_KEY is your sessionize API key
const { getSessions } = SessionizeClient(SESSIONIZE_KEY);

const sessions = await getSessions();
```

## SessionizeClient

- `getAll` - Fetches sessions, speakers, questions, categories, and rooms.
- `getScheduleGrid` - Fetches the schedule grid
- `getSessions` - Fetches the sessions
- `getSpeakers` - Fetches the speakers
- `getSpeakerWall` - Fetches the speaker wall
