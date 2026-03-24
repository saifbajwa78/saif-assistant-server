import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucun fichier reçu" });
    }

    res.json({
      message: "Document reçu",
      filename: req.file.originalname,
      size: req.file.size
    });

  } catch (error) {
    console.error("Erreur analyse document:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
