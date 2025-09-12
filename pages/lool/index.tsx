import { useEffect } from "react"

export default function Lool() {
    useEffect(() => {
        sendEmail()
    }, [])

    const sendEmail = async() => {
        await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: "jhumer.apus@g.msuiit.edu.ph",
                subject: "Hello from Next.js + Gmail",
                text: "This email was sent using Gmail SMTP 🚀",
            }),
        });
    }
    return (
        <div>
            Test
        </div>
    )
}