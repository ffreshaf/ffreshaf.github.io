import { useLayoutEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

type Pill = { left: number; top: number; width: number; height: number }

function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const [pill, setPill] = useState<Pill | null>(null)

  useLayoutEffect(() => {
    const update = () => {
      const active = navRef.current?.querySelector<HTMLElement>("a.active")
      if (!active) return setPill(null)
      setPill({
        left: active.offsetLeft,
        top: active.offsetTop,
        width: active.offsetWidth,
        height: active.offsetHeight,
      })
    }

    update()
    window.addEventListener("resize", update)
    document.fonts?.ready.then(update) // as fontes carregadas mudam as larguras
    return () => window.removeEventListener("resize", update)
  }, [pathname])

  return (
    <header className="bar">
      <Link to="/" className="home">
        <img src="/photo-2.jpg" alt="" />
        <span>Guilherme Linhares</span>
      </Link>

      <nav ref={navRef}>
        {pill && (
          <span
            className="pill"
            aria-hidden="true"
            style={{
              width: pill.width,
              height: pill.height,
              transform: `translate(${pill.left}px, ${pill.top}px)`,
            }}
          />
        )}
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar