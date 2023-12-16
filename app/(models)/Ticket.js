import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
}, { timestamps: true });

const TicketModel = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

export default TicketModel;