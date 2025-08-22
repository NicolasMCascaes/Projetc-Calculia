export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // repassa para o backend
      const response = await fetch("https://3bfecf1dd230.ngrok-free.app/ai/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": req.headers.authorization || ""
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Erro ao comunicar com backend" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}