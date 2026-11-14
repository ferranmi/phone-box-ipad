
(function () {
    "use strict";

    var cpuValue = document.getElementById("cpu-value");
    var ramValue = document.getElementById("ram-value");
    var cpuBar = document.getElementById("cpu-bar");
    var ramBar = document.getElementById("ram-bar");
    var connectionDot = document.getElementById("connection-dot");
    var connectionText = document.getElementById("connection-text");

    var busy = false;

    function detectMode() {
        var query = window.location.search;
        var requested = query.match(/[?&]mode=(legacy|modern)(?:&|$)/);

        if (requested) {
            return requested[1];
        }

        var ua = navigator.userAgent;
        var ios = ua.match(/OS (\d+)_/);

        if (ios && parseInt(ios[1], 10) <= 12) {
            return "legacy";
        }

        return "modern";
    }

    var mode = detectMode();

    document.body.className = "mode-" + mode;
    document.getElementById("interface-mode").textContent =
        mode.toUpperCase();

    function format(value) {
        return value === null || typeof value !== "number" ||
            !isFinite(value) ? "--" : value.toFixed(1);
    }

    function updateMetric(element, bar, value) {
        if (value === null || typeof value !== "number" ||
            !isFinite(value)) {
            element.textContent = "--%";
            bar.style.width = "0%";
            return;
        }

        var safe = Math.max(0, Math.min(100, value));

        element.textContent = format(safe) + "%";
        bar.style.width = safe + "%";
    }

    function setConnection(connected) {
        connectionDot.className = connected
            ? "dot online"
            : "dot offline";

        connectionText.textContent = connected
            ? "Conectado"
            : "Sin conexión";
    }

    function refresh() {
        if (busy) return;

        busy = true;

        fetch("/api/state", { cache: "no-store" })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP " + response.status);
                }

                return response.json();
            })
            .then(function (state) {
                if (!state || !state.pc) {
                    throw new Error("Métricas no disponibles");
                }

                var pc = state.pc;

                updateMetric(cpuValue, cpuBar, pc.cpu);

                var ramPercent = pc.ramTotalGb > 0
                    ? pc.ramUsedGb / pc.ramTotalGb * 100
                    : null;

                updateMetric(ramValue, ramBar, ramPercent);

                document.getElementById("ram-detail").textContent =
                    format(pc.ramUsedGb) + " / " +
                    format(pc.ramTotalGb) + " GB";

                document.getElementById("cpu-name").textContent =
                    pc.cpuName || "Procesador";

                document.getElementById("hostname").textContent =
                    state.host || "Windows Dashboard";

                document.getElementById("last-update").textContent =
                    "Actualizado: " +
                    new Date().toLocaleTimeString();

                setConnection(true);
            })
            .catch(function (error) {
                setConnection(false);
                document.getElementById("last-update").textContent =
                    "Error de conexión";
            })
            .then(function () {
                busy = false;
            });
    }

    refresh();
    window.setInterval(refresh, 1000);
})();
