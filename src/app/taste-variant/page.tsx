import React from "react";
import type { Metadata } from "next";
import { TasteVariant } from "@/components/ach-progestions/TasteVariant";

export const metadata: Metadata = {
  title: "ACH PROGESTIONS & OUTILS — Variante Éditoriale (Taste-Skill)",
  description:
    "Variante haute couture anti-slop pour dirigeants de TPE et PME. Secrétariat d'excellence, téléprospection B2B et recrutement remote.",
};

export default function TasteVariantPage() {
  return <TasteVariant />;
}
