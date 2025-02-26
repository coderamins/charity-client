import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw } from 'lucide-react'; // برای استفاده از آیکن ری‌فرش

const Captcha = ({ onChange }) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(captcha);
    drawCaptcha(captcha);
  };

  const drawCaptcha = (captcha) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 150; // عرض تصویر کپچا
    canvas.height = 50; // ارتفاع تصویر کپچا

    // زمینه تصادفی
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(8, 8, canvas.width, canvas.height);

    // نویز تصادفی
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2, false);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fill();
    }

    // خطوط تصادفی برای سخت‌تر کردن تشخیص
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = 'rgba(109, 108, 108, 0.2)';
      ctx.stroke();
    }

    // تنظیمات متن کپچا
    ctx.font = '30px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // نوشتن کد کپچا روی تصویر
    ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    onChange(captchaCode);
  }, [captchaCode, onChange]);

  return (
    <div className="flex items-center absolute left-55 rounded-lg">
      <canvas
        ref={canvasRef}
        width={200}
        height={50}
        style={{ borderRadius:"5px solid #eee", marginRight: '10px' }}
      />
      <button
        onClick={generateCaptcha}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <RefreshCw size={24} className="text-gray-500 hover:text-blue-600" />
      </button>
    </div>
  );
};

export default Captcha;
