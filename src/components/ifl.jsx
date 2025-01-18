import Link from "next/link";

// Header bileşeni
export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gray-900 text-white shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <InstagramIcon className="h-8 w-8 text-primary transition-transform transform hover:scale-110" />
        <b className="text-xl font-bold">Instafel</b>
      </Link>
      <nav className="flex gap-6">
        <Link href="/guide" className="text-sm font-medium hover:text-primary transition-colors">
          Guide
        </Link>
        <Link href="/library_backup" className="text-sm font-medium hover:text-primary transition-colors">
          BLibrary
        </Link>
        <Link href="/download?version=latest" className="text-sm font-medium hover:text-primary transition-colors">
          Download
        </Link>
      </nav>
    </header>
  );
}

// Yükleme Animasyonu
export function LoadingBar() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-50">
      <div className="h-16 w-16 border-4 border-t-4 border-primary rounded-full animate-spin" />
    </div>
  );
}

// Footer bileşeni
export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 bg-gray-800 text-white border-t border-gray-700">
      <p className="text-xs text-muted-foreground">Developed by mamiiblt with ❤️</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="https://t.me/instafel" className="text-xs hover:text-primary transition-colors">
          Telegram Channel
        </Link>
        <Link href="https://github.com/mamiiblt" className="text-xs hover:text-primary transition-colors">
          GitHub
        </Link>
      </nav>
    </footer>
  );
}

// Instagram Ikonu
function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}