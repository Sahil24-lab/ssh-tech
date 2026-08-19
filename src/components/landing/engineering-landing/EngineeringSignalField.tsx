"use client";

import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

type SignalNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  highlighted: boolean;
  phase: number;
};

const NODE_COUNT = 58;
const CONNECTION_DISTANCE = 185;

export default function EngineeringSignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let nodes: SignalNode[] = [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: NODE_COUNT }, (_, index) => {
        const highlighted = index % 11 === 0;
        const speed = highlighted ? 0.035 : 0.07;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: highlighted ? 2.2 : 1,
          highlighted,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance >= CONNECTION_DISTANCE) continue;

          context.strokeStyle = `rgba(7, 223, 193, ${(1 - distance / CONNECTION_DISTANCE) * 0.09})`;
          context.lineWidth = 0.5;
          context.beginPath();
          context.moveTo(nodes[i].x, nodes[i].y);
          context.lineTo(nodes[j].x, nodes[j].y);
          context.stroke();
        }
      }

      for (const node of nodes) {
        const pulse = reduceMotion ? 0.5 : (Math.sin(time * 0.00045 + node.phase) + 1) / 2;
        if (node.highlighted) {
          const haloRadius = 14 + pulse * 7;
          const halo = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, haloRadius);
          halo.addColorStop(0, `rgba(7, 223, 193, ${0.12 + pulse * 0.08})`);
          halo.addColorStop(1, "rgba(7, 223, 193, 0)");
          context.fillStyle = halo;
          context.beginPath();
          context.arc(node.x, node.y, haloRadius, 0, Math.PI * 2);
          context.fill();
        }

        context.fillStyle = node.highlighted
          ? `rgba(7, 223, 193, ${0.52 + pulse * 0.22})`
          : "rgba(7, 223, 193, 0.2)";
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(animationFrame);
      setup();
      draw();
    });
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Box aria-hidden="true" sx={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.88 }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </Box>
  );
}
