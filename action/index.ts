'use server';

import NodeMailerService from "@/lib/NodeMailerService";

const nodemailer = new NodeMailerService();

export const submitMessage = async (name: string, contact: string, content: string) => {
    try {
        await nodemailer.sendMail(name, contact, content);
        return { success: true };
    } catch (error: any) {
        console.error("submitMessage Error:", error);
        return { 
            success: false, 
            error: error?.message || "Failed to send message. Please try again." 
        };
    }
}