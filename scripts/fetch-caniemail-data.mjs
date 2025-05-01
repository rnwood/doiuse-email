import { CanIEmailFetcher } from 'caniemail-fetcher';
import fs from "node:fs/promises"

// Optional settings
const options = {
    githubToken: '', // Optional, removes GitHub API rate limit
    updateInterval: 12, // Optional, interval to check for updates in hours, default is 24
};

const fetcher = new CanIEmailFetcher(options);


// Update Listener
const updateListener = async (data) => {

    await fs.writeFile("src/data/can-i-email.json", JSON.stringify(data));

    // Stop listening for updates
    fetcher.offUpdate(updateListener);

    console.log("Done");
};

// Listen for updates
fetcher.onUpdate(updateListener);

