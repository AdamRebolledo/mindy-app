import React, { FC } from "react";
import { UseFormReturn } from "react-hook-form";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { IMindyResponse } from "types/MindyType";
import { TFormFilterGraph, getMonthLabelByValue } from "utils/forms/FormFilterGraph";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

type TPlotGraph = {
 data: IMindyResponse;
 form: UseFormReturn<TFormFilterGraph, any, undefined>;
};

const PlotGraph: FC<TPlotGraph> = (props) => {
 const selectedMonth = Number(props.form.getValues("month")) - 1;

 const traceData = props.form.getValues("month")
  ? props.data.serie
     .filter((item) => dayjs(item.fecha).month() === selectedMonth)
     .map((item) => ({
      x: dayjs(item.fecha),
      y: item.valor,
     }))
  : props.data.serie.map((item) => ({
     x: dayjs(item.fecha),
     y: item.valor,
    }));

 traceData.sort((a, b) => a.x.diff(b.x));

 const formattedTraceData = traceData.map((item) => ({
  x: item.x.format(props.form.getValues("month") ? "DD MMM" : "MMM YYYY"),
  y: item.y,
 }));

 return (
  <Plot
   data={[
    {
     x: formattedTraceData.map((item) => item.x),
     y: traceData.map((item) => item.y),
     line: { color: "teal" },
     mode: "lines",
     marker: { color: "rgba(59,130,246,0.5)" },
    },
   ]}
   layout={{
    width: 700,
    height: 450,
    title: `${props.data.nombre} de ${
     props.form.getValues("month") ? `${getMonthLabelByValue(props.form.getValues("month"))} de` : ""
    } ${props.form.getValues("anio")}`,
    yaxis: {
     title: `Valor en ${props.data.unidad_medida}`,
    },
   }}
  />
 );
};

export default PlotGraph;
