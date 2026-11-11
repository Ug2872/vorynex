export default async function handler(req, res) {
    try {
        const backend = await fetch("https://api.iquickofficial.site/api/v1.0/payment/records");
        const text = await backend.text();
        res.status(backend.status);
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.send(text);
    } catch (error) {
        res.status(502).json({ message: "Could not reach the payment server." });
    }
}
