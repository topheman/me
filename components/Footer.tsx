export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-4 mt-12">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>&copy; {currentYear} Christophe Rosset. All rights reserved.</p>
      </div>
    </footer>
  )
}

