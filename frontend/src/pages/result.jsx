import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';


export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  // ✅ Redirect to home if code is missing
  useEffect(() => {
    if (!code) {
      navigate('/');
    }
  }, [code, navigate]);

  return (
    <div className="flex flex-col items-center pt-20 px-4 min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center w-full max-w-xl bg-gray-50 p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Congrats! Your ETS for this return is 15 points!</h1>

        <p className="text-lg text-gray-900 bg-white p-4 rounded shadow break-all w-full text-center">
          {code}
        </p>

        <Link
          to="/pickup"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          Return
        </Link>
      </div>
    </div>
  );
}
