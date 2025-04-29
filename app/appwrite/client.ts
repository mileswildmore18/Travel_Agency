// Export appwrite config from the env file
import {Account, Client, Databases, Storage} from "appwrite";

export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
}

// Create a new Appwrite client
const client = new Client()
.setEndpoint(appwriteConfig.endpointUrl)
.setProject(appwriteConfig.projectId)

// Create a new account
const account = new Account(client);
// Create a new database
const database = new Databases(client);
// Create a new storage
const storage = new Storage(client);

// Export the Appwrite client to other files
export { client, account, database, storage };