document.addEventListener('DOMContentLoaded', () => {
    const svgExample = document.getElementById('svgExample');
    svgExample.innerHTML = `
        <svg width="200" height="200">
            <circle cx="100" cy="100" r="50" fill="blue" />
            <rect x="50" y="50" width="100" height="100" fill="green" />
            <text x="100" y="180" font-size="20" text-anchor="middle" fill="black">SVG példa</text>
        </svg>
    `;

    const svg = svgExample.querySelector('svg');
    svg.addEventListener('click', (e) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const svgRect = svg.getBoundingClientRect();
        rect.setAttribute('x', e.clientX - svgRect.left - 10);
        rect.setAttribute('y', e.clientY - svgRect.top - 10);
        rect.setAttribute('width', 20);
        rect.setAttribute('height', 20);
        rect.setAttribute('fill', 'red');
        svg.appendChild(rect);
    });
});
