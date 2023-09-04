import { convertDate } from "./convertDate";

export const settingChartData = (
  setChartData,
  prices1,
  coin1,
  coin2,
  prices2
) => {
  setChartData({
    labels: prices1.map((data) => convertDate(data[0])),
    datasets: [
      {
        label: coin1?.name ?? "",
        data: prices1.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.15,
        backgroundColor: prices2 ? "transparent" : "rgba(23,340,114,0.1)",
        borderColor: "green",
        pointRadius: 1,
      },
      prices2 && {
        label: coin2?.name ?? "",
        data: prices2.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        tension: 0.15,
        backgroundColor: prices2 ? "transparent" : "rgba(417, 201, 111,0.1)",
        borderColor: "tomato",
        pointRadius: 1,
        yAxisID: "y2",
      },
    ],
  });
};