"use client";
import { useMindyQuery } from "hooks/request/mindyQuery";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SelectField from "./SelectUi";
import { TFormFilterGraph, generateRange, indicatorOptions, isMonthDisabled, monthsOptions } from "utils/forms/FormFilterGraph";
import LoadingOverlay from "./LoadingOverlay";
import PlotGraph from "./PlotGraph";
import PrevJsonRender from "./PrevJsonRender";
import useDeviceWidth from "hooks/useDeviceWidth";

const FormFilterGraph = () => {
 const form = useForm<TFormFilterGraph>();
 const indicatorInput = form.watch("indicator");
 const anioInput = form.watch("anio");
 const monthInput = form.watch("month");

 const deviceWidth = useDeviceWidth();
 const isMobile = deviceWidth === "mobile";

 const requiredMonth = isMonthDisabled(indicatorInput) ? true : Boolean(monthInput);
 const enabled = Boolean(indicatorInput) && Boolean(anioInput) && requiredMonth;

 const aniosOptions = generateRange(indicatorInput);

 const {
  data: mindyQuery,
  isLoading,
  isError,
 } = useMindyQuery({
  indicator: indicatorInput,
  anio: Number(anioInput),
  reactQueryOptions: { enabled },
 });

 useEffect(() => {
  form.setValue("anio", "");
  form.setValue("month", "");
 }, [indicatorInput]);

 return (
  <>
   {isError && <p>Ups... ocurrió un error</p>}
   {isLoading && <LoadingOverlay />}
   <div className='grid grid-cols-12 gap-4 pt-10 pb-12 px-8'>
    <div className='col-span-12 md:col-span-4'>
     <SelectField form={form} name='indicator' options={indicatorOptions} label='Indicador' />
    </div>
    <div className='col-span-12 md:col-span-4'>
     <SelectField form={form} name='anio' options={aniosOptions} label='Año' />
    </div>
    <div className='col-span-12 md:col-span-4'>
     <SelectField form={form} name='month' options={monthsOptions} disabled={isMonthDisabled(indicatorInput)} label='Mes' />
    </div>
   </div>
   <div className='overflow-x-auto'>
    <div className='w-[900px] md:w-[1100px] lg:w-full'>
     <div className={`grid grid-cols-12 gap-4 py-16 px-8 bg-gray-300 ${mindyQuery ? "h-max" : "h-screen"}`}>
      <div className='col-span-12 md:col-span-6 flex justify-start md:justify-center'>
       {mindyQuery && <PlotGraph data={mindyQuery} form={form} />}
      </div>
      <div className='col-span-12 md:col-span-6 flex justify-start md:justify-center'>
       {mindyQuery && <PrevJsonRender data={mindyQuery} isMobile={isMobile} />}
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default FormFilterGraph;
