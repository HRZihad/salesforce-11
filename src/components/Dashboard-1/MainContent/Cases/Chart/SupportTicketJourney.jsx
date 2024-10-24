import { useState } from "react";
import Chart from "react-apexcharts";

const SupportTicketJourney = ({ data = [80, 20], colors = ["#83a2db", "#83a2db"] }) => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: "70%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: false,
              fontSize: "22px",
              color: "#FFFFFF",
            },
            value: {
              show: true,
              fontSize: "16px",
              color: "#FFFFFF",
            },
            total: {
              show: false,
              label: "RTP",
              color: "#FFFFFF",
              fontSize: "18px",
              formatter: () => "98%",
            },
          },
        },
      },
    },
    colors: colors, // Apply dynamic colors here
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
      width: 0,
      colors: ["#fff"],
      curve: "smooth",
    },
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-[400px] md:w-[400px] lg:w-[600px]">
        <Chart options={options} series={data} type="donut" width="100%" />
      </div>
    </div>
  );
};

export default SupportTicketJourney;
