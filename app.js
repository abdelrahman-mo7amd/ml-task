const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
        backgroundColor: "#1C1C1C",
        titleColor: "#FFFFFF",
        bodyColor: "#999",
        padding: 12,
        borderWidth: 0,
        }
    },
    scales: {
        x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#6B6B6B", font: { family: "Inter", size: 12 } }
        },
        y: {
        grid: { color: "#F0F0F0" },
        border: { display: false },
        ticks: { color: "#6B6B6B", font: { family: "Inter", size: 12 } }
        }
    }
};

new Chart(document.getElementById("chart-diff"), {
    type: "bar",
    data: {
        labels: ["Level 2 — Easy", "Level 3 — Medium", "Level 4 — Hard", "Level 5 — Very Hard"],
        datasets: [{
        data: [4.10, 4.91, 4.88, 4.20],
        backgroundColor: ["#D5D5D5", "#0A0A0A", "#888888", "#C0392B"],
        borderRadius: 3,
        borderSkipped: false,
        }]
    },
    options: {
        ...chartDefaults,
        scales: {
        ...chartDefaults.scales,
        y: { ...chartDefaults.scales.y, min: 3.5, max: 5.2 }
        }
    }
});

new Chart(document.getElementById("chart-type"), {
    type: "bar",
    data: {
        labels: ["Contest", "Workshop", "Talk"],
        datasets: [{
        data: [104.9, 87.0, 39.5],
        backgroundColor: ["#0A0A0A", "#888888", "#C0392B"],
        borderRadius: 3,
        borderSkipped: false,
        }]
    },
    options: chartDefaults
});