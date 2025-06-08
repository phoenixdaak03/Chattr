import { connectToDB } from "../db";

export async function GET(){
    const { db } = await connectToDB();

    const chats = await db.collection('chats').find().toArray();

    return new Response(
        JSON.stringify(chats),
        {
            status: 200,
            headers: {
                'Content-type': 'application/json'
            }
        }
    );
}