const bootSequence = [
    { text: "INITIALIZING PFADI_OS v4.0.1...", type: "line-prompt" },
    { text: "LOADING KERNEL MODULES...", type: "line-info" },
    { text: "[OK] NETWORK PROTOCOLS ESTABLISHED", type: "line-success" },
    { text: "[OK] DECRYPTING PULACHA_DATABASE.DB", type: "line-success" },
    { text: "[!!] WARNING: UNSANCTIONED ACCESS DETECTED", type: "line-warning" },
    { text: "BYPASSING FIREWALL...", type: "line-error" },
    { text: "INJECTING EXPLOIT PAYLOAD...", type: "line-error" },
    { text: "ACCESS GRANTED. WELCOME, OPERATOR.", type: "line-success-tag" }
];

const bootContainer = document.getElementById('boot-sequence');
const overlay = document.getElementById('terminal-overlay');
const mainUI = document.getElementById('main-ui');

async function runBoot() {
    for (let i = 0; i < bootSequence.length; i++) {
        const line = document.createElement('div');
        line.className = `boot-line ${bootSequence[i].type}`;
        line.textContent = `> ${bootSequence[i].text}`;
        bootContainer.appendChild(line);
        
        // Zufällige Verzögerung für Realismus
        await new Promise(resolve => setTimeout(resolve, Math.random() * 400 + 200));
    }

    // Kurze Pause am Ende, dann Ausblenden
    setTimeout(() => {
        overlay.style.transition = "opacity 0.5s ease";
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
            mainUI.style.display = "flex";
        }, 500);
    }, 1000);
}

window.onload = runBoot;