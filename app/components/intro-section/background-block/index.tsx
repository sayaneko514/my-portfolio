import React, { useEffect, useRef } from 'react';

const IntroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const snowsRef = useRef<{ x: number; y: number; size: number; color: string; vx: number; vy: number }[]>([]);

    const drawSnows = (context: CanvasRenderingContext2D, width: number, height: number) => {
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);

        for (const snow of snowsRef.current) {
            context.fillStyle = snow.color;
            context.beginPath();
            context.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2);
            context.fill();

            snow.x += snow.vx;
            snow.y += snow.vy;

            if (snow.x < 0) snow.x = width;
            if (snow.x > width) snow.x = 0;
            if (snow.y < 0) snow.y = height;
            if (snow.y > height) snow.y = 0;
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const width = window.innerWidth;
                const height = window.innerHeight;

                canvas.width = width;
                canvas.height = height;

                const snowCount = 500;
                const snowSize = [1, 3, 5, 7, 9];
                const snowColors = ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.4)', 'rgb(207,181,59)', 'rgb(0,128,0)', 'rgb(220,20,60)', 'rgb(65,105,225)'];
                const snows = [];

                for (let i = 0; i < snowCount; i++) {
                    snows.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: snowSize[Math.floor(Math.random() * snowSize.length)],
                        color: snowColors[Math.floor(Math.random() * snowColors.length)],
                        vx: (Math.random() - 0.5) * 0.1,
                        vy: Math.random() * 0.1 + 0.05,
                    });
                }

                snowsRef.current = snows;

                const animate = () => {
                    drawSnows(context, width, height);
                    requestAnimationFrame(animate);
                };

                animate();
            }
        }
    }, []);

    return (
        <div
            id="intro-background"
            style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                clipPath: 'inset(0 0 0 0)',
            }}>
            <div
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                }}
            >
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>
        </div>
    );
};

export default IntroBackground;