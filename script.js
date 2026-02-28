document.addEventListener('DOMContentLoaded', () => {
    // Subtle mouse tracking effect for the background orbs
    const orbs = document.querySelectorAll('.glow-orb');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            // Apply a subtle translation based on mouse position
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.1)`;
        });
    });

    // 3D tilt effect on glass panels
    const panels = document.querySelectorAll('.glass-panel');
    
    panels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on cursor position relative to center
            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
            const rotateY = ((x - centerX) / centerX) * 5;
            
            panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        panel.addEventListener('mouseleave', () => {
            // Reset position
            panel.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            
            // Handle hover state cleanup
            setTimeout(() => {
                if(!panel.matches(':hover')) {
                    panel.style.transform = '';
                }
            }, 300);
        });
    });
});
