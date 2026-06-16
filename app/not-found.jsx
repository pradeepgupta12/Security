import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-red-600 mb-4">404</div>
      <h1 className="text-2xl font-black uppercase mb-2">Page Not Found</h1>
      <p className="text-gray-500 text-sm mb-8 max-w-sm">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
