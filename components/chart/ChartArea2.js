'use client'
import Chart from 'react-apexcharts'

export default function ChartArea2() {
    const options = {
        colors: ["#D33535"],
        chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
        },
        plotOptions: { bar: { columnWidth: "50%" } },
        // labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: { crosshairs: { width: 1 } },

        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
        },

        tooltip: {
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
                title: {
                    formatter: function (e) {
                        return ""
                    },
                },
            },
            marker: { show: !1 },
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                    value: 0,
                },
            },
        },
    }
    const series = [
        {
            data: [
                55, 56, 51, 49, 63, 35, 44, 40, 36, 40, 54, 49, 63, 35, 44, 3,
            ],
        },
    ]
    return (
        <>
            <Chart options={options} series={series} type="area" height={40} width={100} />
        </>
    )
}
