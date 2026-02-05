const bootSequence = [
    { text: "INITIALIZING PFADI_OS v4.0.1...", type: "line-prompt" },
    { text: "LOADING KERNEL MODULES...", type: "line-info" },
    { text: "[OK] NETWORK PROTOCOLS ESTABLISHED", type: "line-success" },
    { text: "[OK] DECRYPTING PULACHA_DATABASE.DB", type: "line-success" },
    { text: "[!!] WARNING: UNSANCTIONED ACCESS DETECTED", type: "line-warning" },
    { text: "BYPASSING FIREWALL...", type: "line-error" },
    { text: "INJECTING EXPLOIT PAYLOAD...", type: "line-error" },
    { text: "ACCESS GRANTED. WELCOME, OPERATOR.", type: "line-success-tag" },
    { text: "SYSTEM HACKED BY VELIO!", type: "line-error" },
    { text: "PS: NUR SPASS", type: "line-info" }
];

const bootContainer = document.getElementById('boot-sequence');
const overlay = document.getElementById('terminal-overlay');
const mainUI = document.getElementById('main-ui');

async function runBoot() {
    // Initialer Delay
    await new Promise(r => setTimeout(r, 500));

    for (const lineData of bootSequence) {
        const line = document.createElement('div');
        line.style.marginBottom = "8px";
        line.className = lineData.type;
        line.textContent = `> ${lineData.text}`;
        bootContainer.appendChild(line);
        
        // Zufälliges Tipp-Tempo
        await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }

    // Finale Sequenz: Flash-Effekt vor dem Übergang
    setTimeout(() => {
        overlay.style.transition = "opacity 0.4s ease, filter 0.4s ease";
        overlay.style.filter = "brightness(3)";
        overlay.style.opacity = "0";
        
        setTimeout(() => {
            overlay.style.display = "none";
            mainUI.style.display = "flex";
            // Fokus auf das Terminal setzen
            document.getElementById('searchInput').focus();
        }, 400);
    }, 800);
}

document.addEventListener('DOMContentLoaded', runBoot);