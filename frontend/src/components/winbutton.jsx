// components/WinButton.tsx
'use client'

import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

export default function WinButton() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    setShowMessage(true)
    setTimeout(() => setShowConfetti(false), 3000) // Hide confetti after 3s
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
      >
        Reveal Reward
      </button>

      {showConfetti && <ConfettiExplosion />}

      {showMessage && (
        <p className="text-xl font-semibold text-green-700 mt-4">
          🎉 Congrats! You won ETS score of 15!
        </p>
      )}
    </div>
  )
}
