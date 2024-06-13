import { MongoClient } from 'mongodb';

export async function GET() {
    const uri = process.env.MONGODB_URI as string;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('portfolio');
        const projects = await db.collection('project')
            .find().sort({ startDate: -1 }).limit(10)
            .toArray();

        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch project list';
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
