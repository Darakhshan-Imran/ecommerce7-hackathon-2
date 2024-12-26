"use client"


import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [{ 
        SportCar: 17439, 
        SUV: 9478, 
        Coupe: 18197,
        Hatchback:12510,
        MPV:14406
    }]


const chartConfig: { [key: string]: { label: string; color: string } } = {
  SportsCar: {
    label: "Sposrts Car",
    color: "#0D3559",
  },
  SUV: {
    label: "SUV",
    color: "#175D9C",
  },
  Coupe: {
    label: "Coupe",
    color: "#2185DE",
  },
  Hatchback: {
    label: "Hatchback",
    color: "#63A9E8",
  },
  MPV: {
    label: "MPV",
    color: "#A6CEF2",
  },
  
} satisfies ChartConfig

export function Component() {
  const totalCars = chartData[0].SportCar + 
                    chartData[0].SUV + 
                    chartData[0].Coupe + 
                    chartData[0].Hatchback + 
                    chartData[0].MPV

  return (
    <Card className="flex flex-col p-2 sm:p-4 md:p-3 lg:p-2 bg-green-200">

      <CardContent className="flex w-full items-center p-2 sm:p-4 md:p-3 lg:p-2 bg-pink-300">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px] bg-yellow-200"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius= "110%"       
            outerRadius="50%" 
              width={window.innerWidth < 768 ? 300 : 500} // Adjust width for responsiveness
        >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-4"
                        >
                          {totalCars.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 6}
                          className="fill-muted-foreground text-sm sm:text-base"
                        >
                          Rental Car
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="Sport Car"
              stackId="a"
              cornerRadius={7}
              fill="#0D3559"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="SUV"
              fill="#175D9C"
              stackId="a"
              cornerRadius={7}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="Coupe"
              fill="#2185DE"
              stackId="a"
              cornerRadius={7}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="Hatchback"
              fill="#63A9E8"
              stackId="a"
              cornerRadius={7}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="MPV"
              fill="#A6CEF2"
              stackId="a"
              cornerRadius={7}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// return (
// <Card className="flex flex-col p-4 bg-white rounded-xl shadow-sm">
// <CardContent className="flex w-full items-center justify-center">
//   <ChartContainer
//     config={chartConfig}
//     className="mx-auto aspect-square w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
//   >
//     <RadialBarChart
//       data={chartData}
//       endAngle={360}
//       innerRadius="50%"
//       outerRadius="100%"
//     >
//       <ChartTooltip
//         cursor={false}
//         content={<ChartTooltipContent hideLabel />}
//       />
//       <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//         <Label
//           content={({ viewBox }) => {
//             if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//               return (
//                 <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
//                   <tspan
//                     x={viewBox.cx}
//                     y={(viewBox.cy || 0) - 10}
//                     className="fill-gray-900 text-lg sm:text-xl md:text-2xl font-bold"
//                   >
//                     {totalCars.toLocaleString()}
//                   </tspan>
//                   <tspan
//                     x={viewBox.cx}
//                     y={(viewBox.cy || 0) + 12}
//                     className="fill-gray-600 text-sm sm:text-base"
//                   >
//                     Rental Cars
//                   </tspan>
//                 </text>
//               );
//             }
//           }}
//         />
//       </PolarRadiusAxis>
//       {Object.keys(chartConfig).map((key) => (
//         <RadialBar
//           key={key}
//           dataKey={key}
//           stackId="a"
//           cornerRadius={7}
//           fill={chartConfig[key].color}
//           className="stroke-transparent"
//         />
//       ))}
//     </RadialBarChart>
//   </ChartContainer>
// </CardContent>
// </Card>
// );
// }
