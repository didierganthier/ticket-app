import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function POST(req) {
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket .create(ticketData);

        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}