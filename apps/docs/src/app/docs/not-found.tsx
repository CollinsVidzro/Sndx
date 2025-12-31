import Link from 'next/link';

export default function DocsNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          The documentation page you're looking for doesn't exist or has been
          moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/docs"
            className="inline-block bg-[#f8971d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e08615] transition-colors duration-200"
          >
            Back to Documentation
          </Link>
          <div>
            <Link
              href="https://sendexa.co/contact"
              className="text-[#f8971d] hover:text-[#e08615] underline transition-colors duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
