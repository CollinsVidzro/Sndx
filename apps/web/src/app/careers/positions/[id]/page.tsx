// app/careers/positions/[id]/page.tsx (updated)
import PositionDetails from "@/components/careers/PositionDetails";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getJobById } from "@/data/jobs";

export default async function PositionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const position = getJobById(id);

  if (!position) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all positions
        </Link>
        
        <PositionDetails position={position} />
      </div>
    </main>
  );
}