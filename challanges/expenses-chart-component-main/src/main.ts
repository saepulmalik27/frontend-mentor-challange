const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const getMaxAmountFromData = (
  data: { day: string; amount: number }[]
): number => {
  return Math.max(...data.map((item) => item.amount));
};

const total = getMaxAmountFromData(data);

const getProgress = (value: number, total: number): number => {
  return (value / total) * 100;
};

console.log(data);


const ChartItem = (): string => {
  const chartData = data.map((item) => {
    const progress = getProgress(item.amount, total);
    const isHigher = item.amount === total;
    return `
<div class="chart-container">
                <div class="chart-bar">
                  <div
                    class="${isHigher ? "bar-highest" : "bar"}"
                    data-value="$${item.amount}"
                    style="width: 100%; height: ${progress}%"
                  ></div>
                </div>
                <p class="chart-label text-medium-brown">${item.day}</p>
              </div>
`;
  });

  return chartData.join("");
};

document.querySelector<HTMLDivElement>("#chart")!.innerHTML = ChartItem();
