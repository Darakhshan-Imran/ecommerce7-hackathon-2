"use client"

// import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  
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

const chartConfig = {
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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={100}
            outerRadius={160}
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
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalCars.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
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
              cornerRadius={5}
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
