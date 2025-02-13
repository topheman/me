"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const MOBILE_BREAKPOINT = 768 // Adjust this value based on your design's mobile breakpoint

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollingRef = useRef(false)

  const showHeader = useCallback(() => {
    setIsVisible(true)
  }, [])

  const controlVisibility = useCallback(() => {
    if (typeof window !== "undefined" && isMobile) {
      const currentScrollY = window.scrollY
      const isAtTop = currentScrollY <= 0
      const isNearTop = currentScrollY < 50 // Adjust this value as needed
      const isScrollingUp = currentScrollY < lastScrollY

      if (isAtTop || isNearTop) {
        setIsVisible(true)
      } else if (isScrollingUp) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
      isScrollingRef.current = true

      // Clear any existing timer
      if (timerRef.current) clearTimeout(timerRef.current)

      // Set new timer for when scrolling stops
      timerRef.current = setTimeout(() => {
        isScrollingRef.current = false
        if (!isVisible && (isAtTop || isNearTop)) {
          showHeader()
        }
      }, 100)
    }
  }, [lastScrollY, isVisible, showHeader, isMobile])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    checkIsMobile() // Check on initial render

    if (typeof window !== "undefined") {
      let rafId: number | null = null
      const handleScroll = () => {
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            controlVisibility()
            rafId = null
          })
        }
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("resize", checkIsMobile)

      return () => {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", checkIsMobile)
        if (timerRef.current) clearTimeout(timerRef.current)
        if (rafId) cancelAnimationFrame(rafId)
      }
    }
  }, [controlVisibility])

  return isMobile ? isVisible : true
}

