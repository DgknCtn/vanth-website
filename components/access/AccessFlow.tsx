"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CodeStep } from "./CodeStep";
import { ApplicationForm } from "./ApplicationForm";
import { StatusChecker } from "./StatusChecker";
import { BorderBeam } from "@/components/ui/border-beam";

type Step = "code" | "form" | "success";

export function AccessFlow() {
  const [step, setStep] = useState<Step>("code");
  const [validCode, setValidCode] = useState("");

  return (
    <>
      {/* Step indicator */}
      {step !== "success" && (
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 text-xs font-semibold ${step === "code" ? "text-purple-400" : "text-green-400"}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${step === "code" ? "border-purple-500/40 bg-purple-500/10 text-purple-400" : "border-green-500/40 bg-green-500/10 text-green-400"}`}>
              {step === "code" ? "1" : "✓"}
            </div>
            Access Code
          </div>
          <div className="flex-1 h-px bg-white/10" />
          <div className={`flex items-center gap-2 text-xs font-semibold ${step === "form" ? "text-purple-400" : "text-slate-600"}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${step === "form" ? "border-purple-500/40 bg-purple-500/10 text-purple-400" : "border-white/10 text-slate-600"}`}>
              2
            </div>
            Application
          </div>
        </div>
      )}

      {/* Main card */}
      {step === "success" ? (
        <div className="relative bg-[#10101e] border border-green-500/20 rounded-2xl p-8 text-center overflow-hidden">
          <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Application Submitted</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Your application is under review. We read every application carefully — there is no set ETA.
          </p>
          <div className="bg-white/[0.03] rounded-xl p-4 text-left space-y-2 mb-4">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">What happens next?</p>
            <p className="text-slate-400 text-sm">· Committee reviews manually, one by one.</p>
            <p className="text-slate-400 text-sm">· You may be moved to PENDING with no max duration.</p>
            <p className="text-slate-400 text-sm">· Decision is final. Rejected applicants cannot reapply.</p>
            <p className="text-slate-400 text-sm">· If approved, you will receive invite rights (3 codes).</p>
          </div>
          <p className="text-slate-500 text-sm">Use the status checker below to track your application.</p>
          <BorderBeam colorFrom="#22c55e" colorTo="#a855f7" size={200} duration={12} borderWidth={1.5} />
        </div>
      ) : (
        <div className="relative bg-[#10101e] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden">
          {step === "code" && (
            <CodeStep
              onValidCode={(code) => {
                setValidCode(code);
                setStep("form");
              }}
            />
          )}
          {step === "form" && (
            <ApplicationForm
              accessCode={validCode}
              onSuccess={() => setStep("success")}
            />
          )}
          <BorderBeam colorFrom="#a855f7" colorTo="#ec4899" size={200} duration={10} borderWidth={1.5} />
        </div>
      )}

      {/* Status checker — always visible */}
      <StatusChecker />
    </>
  );
}
