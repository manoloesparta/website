export default function Footer() {
  const url = "https://github.com/manoloesparta/website";

  return (
    <footer className="mt-16 py-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-screen-lg container mx-auto px-5">
        <p className="text-center text-gray-600">
          Built with{" "}
          <a
            href="https://astro.build"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Astro
          </a>{" "}
          and{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            React
          </a>
          . Check the{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            source code
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
