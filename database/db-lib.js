export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getDocument(client, collection) {
  const db = client.db();

  const documents = await db.collection(collection).find().toArray();

  return documents;
}