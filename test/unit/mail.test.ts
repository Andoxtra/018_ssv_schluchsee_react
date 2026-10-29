import {afterEach, describe, expect, test, vi} from "vitest";

const {sendMail} = vi.hoisted(() => ({sendMail: vi.fn()}));
vi.mock("nodemailer", () => ({createTransport: () => ({sendMail})}));

import {buildContactEmail, createMailer} from "../../server/lib/mail.ts";
import type {Message} from "../../server/types.ts";

const message: Message = {
    id: "1",
    name: "Max Mustermann",
    email: "max@example.com",
    subject: "Probetraining",
    message: "Hallo, ich möchte gerne einmal am Training teilnehmen.",
    createdAt: "2026-10-29T10:00:00.000Z",
    read: false,
};

afterEach(() => {
    sendMail.mockReset();
});

describe("buildContactEmail", () => {
    test("names the subject and includes the sender details and message body", () => {
        const email = buildContactEmail(message);
        expect(email.subject).toBe("Neue Kontaktanfrage: Probetraining");
        expect(email.text).toContain("Max Mustermann");
        expect(email.text).toContain("max@example.com");
        expect(email.text).toContain("Hallo, ich möchte gerne einmal am Training teilnehmen.");
    });
});

describe("createMailer", () => {
    test("returns undefined when mail is not configured", () => {
        expect(createMailer(undefined)).toBeUndefined();
    });

    test("sends a notification through the configured transport", async () => {
        sendMail.mockResolvedValue({});
        const mailer = createMailer({
            from: "info@ssv-schluchsee.de",
            to: "info@ssv-schluchsee.de",
            smtp: {host: "mail.ssv-schluchsee.de", port: 465, secure: true, user: "info@ssv-schluchsee.de", pass: "secret"},
        });
        await mailer!.notify(message);
        expect(sendMail).toHaveBeenCalledTimes(1);
        expect(sendMail.mock.calls[0][0]).toMatchObject({
            from: "info@ssv-schluchsee.de",
            to: "info@ssv-schluchsee.de",
            subject: "Neue Kontaktanfrage: Probetraining",
        });
    });
});
