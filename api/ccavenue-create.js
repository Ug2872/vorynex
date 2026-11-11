export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "POST only" });
        return;
    }
    try {
        const backend = await fetch("https://api.iquickofficial.site/api/v1.0/payment/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body || {})
        });
        const text = await backend.text();
        res.status(backend.status);
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.send(text);
    } catch (error) {
        res.status(502).json({ message: "Could not reach the payment server." });
    }
}
