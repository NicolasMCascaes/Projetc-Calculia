export default async function handler(req, res) {
  try {
    const response = await fetch("https://5983a25385a5.ngrok-free.app/ai/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro no proxy:", error);
    res.status(500).json({ error: "Erro no proxy" });
  }
}