"use client";
import { useMindyQuery } from "hooks/request/mindyQuery";
import React from "react";

const TestComponent = () => {
 const { data: mindyQuery } = useMindyQuery({ indicator: "uf", anio: 1978, reactQueryOptions: { enabled: true } });
 console.log(mindyQuery);
 return <div>TestComponent</div>;
};

export default TestComponent;
