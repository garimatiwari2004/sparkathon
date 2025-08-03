'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';


export default function QRScanner() {
  const [scanned, setScanned] = useState(null);
  const scannerRef = useRef(null);
  const hasScannedRef = useRef(false);

  useEffect(() => {
    const scanner = new Html5Qrcode('qr-reader');
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: 'user' },
        { fps: 10, qrbox: { width: 320, height: 320 } },
        (decodedText) => {
          if (!hasScannedRef.current) {
            hasScannedRef.current = true;
            console.log('✅ Scanned from camera:', decodedText);

        // ✅ Redirect to result page with scanned code
            window.location.href = `/result?code=${encodeURIComponent(decodedText)}`;

            if (scanner.isScanning) {
              scanner.stop().then(() => {
                console.log('🛑 Scanner stopped after camera scan');
              }).catch((err) => {
                console.warn('⚠️ Error while stopping scanner:', err);
              });
            }
          }
        },
        (err) => {
          console.log('📛 QR Code Parse Error:', err);
        }
      )
      .then(() => console.log('📷 Scanner started'))
      .catch((err) => console.error('❌ Could not start scanner:', err));

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().then(() => {
          console.log('🧹 Scanner stopped on unmount');
        }).catch((err) => {
          console.warn('⚠️ Failed to stop scanner on unmount:', err);
        });
      }
    };
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const scanner = new Html5Qrcode('qr-reader');

    try {
      const result = await scanner.scanFile(file, true); // true = show animation
      console.log('📷 Scanned from image:', result);
      setScanned(result);

      // ✅ Redirect after image scan
      window.location.href = `/result?code=${encodeURIComponent(result)}`;
    } catch (err) {
      console.error('❌ Failed to scan image:', err);
      alert('Could not detect QR code in the selected image.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-18">QR Code Scanner</h2>
      <p className="text-gray-600 mb-4">
        Scan a QR code using your camera or upload an image to know the product details.
      </p>

      {/* Live camera preview */}
      <div
        id="qr-reader"
        style={{
          width: '360px',
          height: '300px',
          backgroundColor: '#000',
          borderRadius: '8px'
        }}
        className="mb-4"
      ></div>

      {/* Upload from gallery */}
      <label className="mt-4 text-sm font-medium text-gray-700 border-black" type='submit'>
        Or upload QR from gallery:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2 border-2 border-black-300 rounded p-2 hover:cursor-pointer "></input>
     
    </div>
  );
}
