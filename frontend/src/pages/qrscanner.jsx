import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QRScanner() {
  const [scanned, setScanned] = useState(null);

  useEffect(() => {
    const scanner = new Html5Qrcode('qr-reader');

    scanner
      .start(
        { facingMode: 'user' },
        { fps: 10, qrbox: { width: 320, height: 320 } },
        (decodedText) => {
          if (!scanned) {
            console.log('✅ Scanned from camera:', decodedText);
            setScanned(decodedText);
            scanner.stop().then(() => {
              console.log('🛑 Scanner stopped after camera scan');
            });
          }
        },
        (err) => {
          console.log('📛 QR Code Parse Error:', err);
        }
      )
      .then(() => console.log('📷 Scanner started'))
      .catch((err) => console.error('❌ Could not start scanner:', err));

    return () => {
      scanner.stop().catch((err) => {
        console.warn('⚠️ Failed to stop scanner on unmount:', err);
      });
    };
  }, [scanned]);

  // 📁 Handle image file upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const scanner = new Html5Qrcode('qr-reader');

    try {
      const result = await scanner.scanFile(file, true); // true = show animation
      console.log('📷 Scanned from image:', result);
      setScanned(result);
    } catch (err) {
      console.error('❌ Failed to scan image:', err);
      alert('Could not detect QR code in the selected image.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">QR Code Scanner</h2>

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
      <label className="mt-4 text-sm font-medium text-gray-700">
        Or upload QR from gallery:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2"
      />

      {/* Show scanned result */}
      {scanned && (
        <div className="mt-6 p-4 bg-white rounded shadow text-center max-w-md w-full">
          <h3 className="text-lg font-semibold text-green-600">Scanned Result</h3>
          <p className="text-gray-800 mt-2">{scanned}</p>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Scan Another
          </button>
        </div>
      )}
    </div>
  );
}
