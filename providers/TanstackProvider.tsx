"use client";

import { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanstackProvider = (props: { children: ReactNode }) => {
 const [queryClient] = useState(() => new QueryClient());

 return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};

export default TanstackProvider;
