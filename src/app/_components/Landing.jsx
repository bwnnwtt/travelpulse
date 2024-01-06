export default function Landing({children, customCSS}) {
  return (
    <div className={`min-h-screen ${customCSS}`}>
      {children}
    </div>
  )
}
