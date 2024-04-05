import { asyncError } from "../middlewares/errorMiddleware.js";
import { Contact } from "../models/Contact.js";

export const contact = asyncError(
    async (req, res, next) => {
        const { name, email, message } = req.body;

        await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            message: "Message Sent Successfully"
        });
    }
);