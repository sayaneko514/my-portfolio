import { MongoClient } from 'mongodb';

interface QueryOptions {
    dbName: string;
    collectionName: string;
    query: any;
    formatResult?: (items: any[]) => string;
}


const defaultFormatResult = (items: any[]): string => items.map(item => item.name).join(", ");

export async function fetchFromDb({
    dbName,
    collectionName,
    query,
    formatResult = defaultFormatResult
}: QueryOptions): Promise<string> {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();

    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const items = await collection.find(query).toArray();
        return formatResult(items);
    } finally {
        await client.close();
    }
}
