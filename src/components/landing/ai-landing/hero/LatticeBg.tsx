"use client";

import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glowing: boolean;
}

const PARTICLE_COUNT = 90;   // more nodes = denser constellation
const CONNECTION_DIST = 195; // wider reach = more lines per frame
const SPEED_SMALL = 0.42;
const SPEED_GLOW = 0.15;
const HOVER_RADIUS = 22;

export default function LatticeBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let W = 0;
    let H = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = x >= 0 && x <= W && y >= 0 && y <= H ? { x, y } : null;
    };
    document.addEventListener("mousemove", onMouseMove);

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);

      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const glowing = Math.random() < 0.18;
        const spd = glowing ? SPEED_GLOW : SPEED_SMALL;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * spd * 2,
          vy: (Math.random() - 0.5) * spd * 2,
          radius: glowing ? Math.random() * 1.8 + 2 : Math.random() * 1 + 0.7,
          glowing,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.strokeStyle = `rgba(7, 223, 193, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        const dist = mouse
          ? Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2)
          : Infinity;
        const isHovered = dist < HOVER_RADIUS;

        // Halo — glowing nodes always, small nodes only on hover (very faint)
        if (p.glowing || isHovered) {
          const hR = isHovered && !p.glowing ? p.radius * 4 : p.radius * 5;
          const hA = isHovered && !p.glowing ? 0.09 : 0.16;
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, hR);
          g.addColorStop(0, `rgba(7, 223, 193, ${hA})`);
          g.addColorStop(1, "rgba(7, 223, 193, 0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, hR, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        // Core dot — slight grow + gentle brightening on hover
        const r = isHovered ? p.radius * 1.5 : p.radius;
        const alpha = isHovered
          ? Math.min((p.glowing ? 0.6 : 0.28) + 0.22, 0.55)
          : p.glowing
          ? 0.6
          : 0.28;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(7, 223, 193, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animId);
      setup();
      draw();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </Box>
  );
}
