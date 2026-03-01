"use client";

import { useState } from "react";
import { Check, X, Lock, AlertTriangle, Loader2 } from "lucide-react";

interface CodeStepProps {
  onValidCode: (code: string) => void;
}

export function CodeStep({ onValidCode }: CodeStepProps) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "valid" | "locked" | "invalid">("idle");
  const [message, setMessage] = useState("");

  async function handleValidate() {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`/api/access/validate?code=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (data.valid) {
        setStatus("valid");
        setMessage(data.message ?? "Code accepted.");
      } else if (data.state === "LOCKED") {
        setStatus("locked");
        setMessage(data.message ?? "This code is currently locked.");
      } else {
        setStatus("invalid");
        setMessage(data.message ?? "Invalid access code.");
      }
    } catch {
      setStatus("invalid");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Access Code
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase());
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="VANTH-XXXX-XXXX"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 font-mono text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-colors"
            onKeyDown={(e) => e.key === "Enter" && handleValidate()}
            disabled={status === "loading" || status === "valid"}
          />
          <button
            onClick={handleValidate}
            disabled={status === "loading" || !code.trim() || status === "valid"}
            className="px-5 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shrink-0"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : "Validate"}
          </button>
        </div>
      </div>

      {status === "valid" && (
        <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-green-400 text-sm font-semibold">{message}</p>
          </div>
          <button
            onClick={() => onValidCode(code.trim().toUpperCase())}
            className="px-4 py-1.5 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm font-semibold transition-colors shrink-0"
          >
            Continue →
          </button>
        </div>
      )}

      {status === "locked" && (
        <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <Lock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-yellow-400 text-sm">{message}</p>
        </div>
      )}

      {status === "invalid" && (
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-red-400 text-sm">{message}</p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-slate-400 text-xs">
              <span className="text-amber-400 font-semibold">Stay safe:</span>{" "}
              Access codes are distributed only through official VANTH channels. Never pay for an access code.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
