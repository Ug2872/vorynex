export default async function handler(req, res) {
    const encResp = (req.body && req.body.encResp) || req.query.encResp || "";
    const backend = await fetch("https://pay.vorynex.in/api/v1.0/payment/ccavenue/response", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ encResp: String(encResp) }).toString()
    });
    const html = await backend.text();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
}
