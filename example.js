import { getAll, getSpeakers, getSessions } from './dist/index.js';

// Example usage of the Sessionize API
async function example() {
  try {
    // Replace with your actual Sessionize API key
    const apiKey = process.env.SESSIONIZE_API_KEY || 'your-api-key-here';

    console.log('Fetching all data...');
    const allData = await getAll(apiKey);
    console.log(
      `Found ${allData.sessions.length} sessions and ${allData.speakers.length} speakers`,
    );

    console.log('\nFetching speakers...');
    const speakers = await getSpeakers(apiKey);
    console.log(`Found ${speakers.length} speakers`);

    console.log('\nFetching sessions...');
    const sessions = await getSessions(apiKey);
    console.log(`Found ${sessions.length} session groups`);

    // Example: Display first speaker
    if (speakers.length > 0) {
      const firstSpeaker = speakers[0];
      console.log('\nFirst speaker:', {
        name: firstSpeaker.fullName,
        bio: firstSpeaker.bio,
        tagLine: firstSpeaker.tagLine,
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  example();
}
