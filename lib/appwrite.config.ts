import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;
const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b61e5b000ac011ad45")
  .setKey(
    "888ec76ee59ec8cfbbf6a3ba2131b392f4f6f73f59fdd3831b4a7643b9ff92db34ab47ec7559f759f3e82573a4a358a197ed3f3009993c9dc31e514ab59740e01e00b80b5b1ade8920aa7cdb63ed6ac5030b9184bc36b063f0fe21463555336d5d56d127d1418b621b60c6de56c9339d2b7eb4fe5f867f26508e63a48aaabaf2"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
