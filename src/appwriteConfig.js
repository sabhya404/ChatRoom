import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "663932990003e028dad7";
export const DATABASE_ID = "663b681400008f220d9e";
export const COLLECTION_ID_MESSAGES = "663b682b000ff1b6c1de";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("663932990003e028dad7");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
