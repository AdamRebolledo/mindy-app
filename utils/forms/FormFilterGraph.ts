type TIndicatorValue =
  | "uf"
  | "libra_cobre"
  | "tasa_desempleo"
  | "euro"
  | "imacec"
  | "dolar"
  | "tpm"
  | "ivp"
  | "ipc"
  | "dolar_intercambio"
  | "utm"
  | "bitcoin";

export const indicatorOptions = [
  { value: "uf", label: "Unidad de fomento (UF)" },
  { value: "libra_cobre", label: "Libra de Cobre" },
  { value: "tasa_desempleo", label: "Tasa de desempleo" },
  { value: "euro", label: "Euro" },
  { value: "imacec", label: "Imacec" },
  { value: "dolar", label: "Dólar observado" },
  { value: "tpm", label: "Tasa Política Monetaria (TPM)" },
  { value: "ivp", label: "Índice de valor promedio (IVP)" },
  { value: "ipc", label: "Índice de Precios al Consumidor (IPC)" },
  { value: "dolar_intercambio", label: "Dólar acuerdo" },
  { value: "utm", label: "Unidad Tributaria Mensual (UTM)" },
  { value: "bitcoin", label: "bitcoin" },
];

export const monthByIndicatorDisabled = [
  { value: "uf", disabled: false },
  { value: "libra_cobre", disabled: false },
  { value: "tasa_desempleo", disabled: true },
  { value: "euro", disabled: false },
  { value: "imacec", disabled: true },
  { value: "dolar", disabled: false },
  { value: "tpm", disabled: false },
  { value: "ivp", disabled: false },
  { value: "ipc", disabled: true },
  { value: "dolar_intercambio", disabled: false },
  { value: "utm", disabled: true },
  { value: "bitcoin", disabled: false },
];

export const isMonthDisabled = (indicator: TIndicatorValue): boolean => {
  const indicatorStatus = monthByIndicatorDisabled.find(item => item.value === indicator);
  return indicatorStatus ? indicatorStatus.disabled : false;
}

export const generateRange = (value: TIndicatorValue) => {
  const anioActual = new Date().getFullYear();
  const inx = [
    { value: "uf", label: "Unidad de fomento (UF)", startYear: 1977 },
    { value: "libra_cobre", label: "Libra de Cobre", startYear: 2012 },
    { value: "tasa_desempleo", label: "Tasa de desempleo", startYear: 2009 },
    { value: "euro", label: "Euro", startYear: 1999 },
    { value: "imacec", label: "Imacec", startYear: 1997 },
    { value: "dolar", label: "Dólar observado", startYear: 1984 },
    { value: "tpm", label: "Tasa Política Monetaria (TPM)", startYear: 2001 },
    { value: "ivp", label: "Índice de valor promedio (IVP)", startYear: 1990 },
    { value: "ipc", label: "Índice de Precios al Consumidor (IPC)", startYear: 1928 },
    { value: "dolar_intercambio", label: "Dólar acuerdo", startYear: 1988 },
    { value: "utm", label: "Unidad Tributaria Mensual (UTM)", startYear: 1990 },
    { value: "bitcoin", label: "Bitcoin", startYear: 2009 }
  ];
  const index = inx.find(ind => ind.value === value);
  if (!index) {
    return [];
  }
  return Array.from({ length: anioActual - index.startYear + 1 }, (_, i) => ({
    value: `${index.startYear + i}`,
    label: `${index.startYear + i}`
  }));
}

export const monthsOptions = [
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" }
];

export const getMonthLabelByValue = (value: string) => {
  const month = monthsOptions.find(month => month.value === value);
  return month ? month.label : "Valor no encontrado";
}

export type TFormFilterGraph = {
  indicator: TIndicatorValue;
  anio: string
  month: string
};