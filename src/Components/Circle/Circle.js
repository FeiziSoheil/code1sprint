import React, { useEffect, useState } from 'react';
import './Circle.css';

export default function Circle() {
  const [positions1, setPositions1] = useState([]);
  const [positions2, setPositions2] = useState([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const pos1 = [];
      const pos2 = [];
      for (let i = 0; i <= 8; i++) {
        pos1.push({
          left: Math.random() * 80 + '%',
          top: Math.random() * 80 + '%',
        });
        pos2.push({
          left: Math.random() * 100 + '%',
          top: Math.random() * 90 + '%',
        });
      }
      setPositions1(pos1);
      setPositions2(pos2);
    };

    generateRandomPositions();
    const interval = setInterval(generateRandomPositions, 40000); // هر 40 ثانیه یک بار مقادیر تصادفی جدید ایجاد می‌شود

    return () => clearInterval(interval);
  }, []);

  return (
    < div className="circle-container">
      <div
        className="circle1"
        style={{
          left: positions1[0]?.left,
          top: positions1[0]?.top,
          animation: `moveCircle1 60s infinite`, // مدت زمان انیمیشن را افزایش دادیم
        }}
      ></div>
      <div
        className="circle2"
        style={{
          left: positions2[0]?.left,
          top: positions2[0]?.top,
          animation: `moveCircle2 20s infinite`, // مدت زمان انیمیشن را افزایش دادیم
        }}
      ></div>
      <style>{`
        @keyframes moveCircle1 {
          0% { top: -8rem ; left: -10rem; }
          20% { left: ${positions1[1]?.left}; top: ${positions1[1]?.top}; }
          40% { left: ${positions1[2]?.left}; top: ${positions1[2]?.top}; }
          60% { left: ${positions1[3]?.left}; top: ${positions1[3]?.top}; }
          80% { left: ${positions1[4]?.left}; top: ${positions1[4]?.top}; }
          100% { top: -8rem ; left: -10rem;  }
        }

        @keyframes moveCircle2 {
          0% { top: -8rem; left: -10rem; }
          20% { right: ${positions2[1]?.right}; top: ${positions2[1]?.top}; }
          40% { right: ${positions2[2]?.right}; top: ${positions2[2]?.top}; }
          60% { right: ${positions2[3]?.right}; top: ${positions2[3]?.top}; }
          80% { right: ${positions2[4]?.left}; top: ${positions2[4]?.top}; }
          100% { top: -8rem; left: -10rem; }
        }
      `}</style>
    </div>
  );
}