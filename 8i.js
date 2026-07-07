// TP8 – 2×TP4 + Mittelstütze

const TP4A = {
    kern:    { role: "Quelle",  signal: "Ich existiere A" },
    monitor: { role: "Spiegel", signal: "Er existiert wirklich A" },
    sched:   { role: "Ordner",  signal: "Ich habe es geordnet A" },
    ui:      { role: "Fenster", signal: "Ich zeige es A" }
};

const TP4B = {
    kern:    { role: "Quelle",  signal: "Ich existiere B" },
    monitor: { role: "Spiegel", signal: "Er existiert wirklich B" },
    sched:   { role: "Ordner",  signal: "Ich habe es geordnet B" },
    ui:      { role: "Fenster", signal: "Ich zeige es B" }
};

// Mittelstütze – verhindert die TP8-Schiff-Macke
const middle = {
    support: "Ich stabilisiere beide TP4",
    linkA: TP4A.kern.signal,
    linkB: TP4B.kern.signal
};

function tp8_scan() {
    return {
        oben: TP4A,
        unten: TP4B,
        stuetze: middle,
        form: "TP8 = TP4 oben + TP4 unten + Mittelstütze"
    };
}

console.log(tp8_scan());

