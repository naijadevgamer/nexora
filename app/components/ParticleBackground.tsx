// components/Particles.tsx
"use client";
import { useEffect, useRef } from "react";
// components/backgrounds/ParticleNetwork.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
// import { gsap } from "gsap";

const ParticleBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(139, 92, 246, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < canvas.width / 5; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};

export default ParticleBackground;

export const ParticleNetwork = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 10 + particle.id * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// components/backgrounds/AuroraBackground.tsx

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-blue-500/15 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// components/backgrounds/FloatingGrid.tsx
export const FloatingGrid = () => {
  const gridItems = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    x: (i % 4) * 25,
    y: Math.floor(i / 4) * 25,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {gridItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-lg border border-primary/10"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: "20%",
            height: "20%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10 + item.id,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// components/backgrounds/DigitalRain.tsx

const characters =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

export const DigitalRain = () => {
  const [columns, setColumns] = useState<
    Array<Array<{ char: string; opacity: number }>>
  >([]);

  useEffect(() => {
    // Initialize columns
    const colCount = Math.floor(window.innerWidth / 20);
    const rowCount = Math.floor(window.innerHeight / 20);

    const newColumns = Array.from({ length: colCount }).map(() =>
      Array.from({ length: rowCount }).map(() => ({
        char: characters[Math.floor(Math.random() * characters.length)],
        opacity: Math.random() * 0.5,
      })),
    );

    setColumns(newColumns);

    // Animation loop
    const interval = setInterval(() => {
      setColumns((prev) =>
        prev.map((column) => [
          {
            char: characters[Math.floor(Math.random() * characters.length)],
            opacity: 1,
          },
          ...column.slice(0, -1).map((item) => ({
            ...item,
            opacity: Math.max(0, item.opacity - 0.1),
          })),
        ]),
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden font-mono text-green-400/30">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className="absolute top-0 flex flex-col"
          style={{ left: `${colIndex * 20}px` }}
        >
          {column.map((item, rowIndex) => (
            <motion.div
              key={`${colIndex}-${rowIndex}`}
              initial={{ opacity: item.opacity }}
              animate={{ opacity: item.opacity }}
              transition={{ duration: 0.3 }}
              className="text-xs"
            >
              {item.char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};
