import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const move = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

            particles.current.push({
                x: e.clientX,
                y: e.clientY,
                size: 6,
                alpha: 1
            });
        };

        window.addEventListener("mousemove", move);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((p, i) => {
                p.alpha -= 0.03;
                p.size *= 0.96;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;

                ctx.fill();

                if (p.alpha <= 0) particles.current.splice(i, 1);
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <canvas ref={canvasRef} className="cursor-canvas" />
        </>
    );
}
