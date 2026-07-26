import { useState } from 'react';

function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippets = [
    {
      id: 0,
      filename: "gemini_pipeline.py",
      language: "Python / Gemini API",
      title: "Asynchronous Email LLM Ingestion",
      code: `import asyncio
from google import genai
from google.genai import types

class AsyncEmailIngestionEngine:
    """Asynchronously parses unstructured incoming emails into structured CRM data."""
    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=api_key)
        self.model_name = "gemini-2.5-flash"

    async def parse_unstructured_email(self, email_body: str) -> dict:
        prompt = (
            "Extract customer contact details, inquiry intent, required services, "
            "and pricing requests into a validated JSON schema."
        )
        response = await asyncio.to_thread(
            self.client.models.generate_content,
            model=self.model_name,
            contents=[prompt, email_body],
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        return response.parsed`
    },
    {
      id: 1,
      filename: "nougat_ocr.py",
      language: "Python / PyTorch",
      title: "Nougat Math Formula OCR Pipeline",
      code: `import torch
from transformers import NougatProcessor, VisionEncoderDecoderModel
from PIL import Image

class FormulaOCRExtractor:
    """Meta Nougat PyTorch tensor pipeline for extracting scientific formulas from PDFs."""
    def __init__(self, device: str = None):
        self.device = device or ("cuda" if torch.cuda.is_available() else "cpu")
        self.processor = NougatProcessor.from_pretrained("facebook/nougat-base")
        self.model = VisionEncoderDecoderModel.from_pretrained("facebook/nougat-base").to(self.device)

    def extract_latex_from_image(self, image: Image.Image) -> str:
        pixel_values = self.processor(image, return_tensors="pt").pixel_values.to(self.device)
        with torch.no_grad():
            outputs = self.model.generate(
                pixel_values,
                min_length=1,
                max_new_tokens=512,
                bad_words_ids=[[self.processor.tokenizer.unk_token_id]]
            )
        return self.processor.batch_decode(outputs, skip_special_tokens=True)[0]`
    },
    {
      id: 2,
      filename: "tracker_daemon.py",
      language: "Python / SQLite",
      title: "Crash-Safe Input Activity Tracker",
      code: `import sqlite3
import time
from pynput import keyboard, mouse

class CrashSafeActivityTracker:
    """Tracks active vs. idle desktop usage using OS input hooks and SQLite WAL mode."""
    def __init__(self, db_path: str = "activity_logs.db"):
        self.db_path = db_path
        self._init_sqlite_wal()
        self.last_input_time = time.time()

    def _init_sqlite_wal(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("PRAGMA journal_mode=WAL;")
            conn.execute("""
                CREATE TABLE IF NOT EXISTS activity_logs (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp REAL,
                    state TEXT
                )
            """)

    def on_input_event(self, *args):
        self.last_input_time = time.time()`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="code-showcase-section" id="codeShowcase">
      <div className="code-showcase-container">
        <div className="code-showcase-header">
          <span className="code-badge">⚡ Live Architecture</span>
          <h2 className="code-section-title">Engineered Code Snippets</h2>
          <p className="code-section-desc">
            Production-grade implementations extracted from live AI pipelines and backend infrastructure.
          </p>
        </div>

        {/* IDE Container */}
        <div className="ide-window">
          {/* Top Bar with Tabs */}
          <div className="ide-top-bar">
            <div className="ide-dots">
              <span className="ide-dot dot-red"></span>
              <span className="ide-dot dot-yellow"></span>
              <span className="ide-dot dot-green"></span>
            </div>

            <div className="ide-file-tabs">
              {snippets.map((snip, idx) => (
                <button
                  key={snip.id}
                  className={`ide-tab ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="tab-icon">🐍</span>
                  <span className="tab-name">{snip.filename}</span>
                </button>
              ))}
            </div>

            <button className="copy-code-btn" onClick={handleCopy}>
              {copied ? 'Copied! ✓' : 'Copy Code'}
            </button>
          </div>

          {/* Subheader info */}
          <div className="ide-sub-header">
            <span className="ide-lang-badge">{snippets[activeTab].language}</span>
            <span className="ide-snippet-title">{snippets[activeTab].title}</span>
          </div>

          {/* Code Viewer Body */}
          <div className="ide-body">
            <pre className="code-content">
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeShowcase;
