// app/careers/positions/page.tsx
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PositionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to careers
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Open Positions
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Please select a specific position from the careers page to view its details.
          </p>
          
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition-all"
          >
            View All Positions
          </Link>
        </div>
      </div>
    </main>
  );
}