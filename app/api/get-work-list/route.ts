import { MongoClient } from 'mongodb';

export async function GET() {
    const uri = process.env.MONGODB_URI as string;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('portfolio');
        const works = await db.collection('work')
            .find().sort({ startDate: -1 })
            .toArray();

        return new Response(JSON.stringify(works), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch work history';
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } finally {
        await client.close();
    }
}
