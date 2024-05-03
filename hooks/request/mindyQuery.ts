import { useQuery } from "@tanstack/react-query"
import { IMindyResponse } from "types/MindyType"
import { ReactQueryOptions } from "types/RequestType"
import { apiClient } from "utils/ApiClient"

const endpoints = {
  mindyList: (indicator: string, anio: number) => `${indicator}/${anio}`,
}

export const useMindyQuery = (params: { indicator: string; anio: number; queryParams?: unknown } & ReactQueryOptions) => {
  const { queryParams, reactQueryOptions, indicator, anio } = params
  const endpoint = endpoints.mindyList(indicator, anio)
  const list = useQuery({
    ...reactQueryOptions,
    queryKey: [endpoint],
    queryFn: () => apiClient.get<IMindyResponse>({ endpoint, queryParams }),
    select: (data) => data,
  })
  return list
}
