import { useMutation, useQuery } from "@tanstack/react-query"
import useLoader from "hooks/useLoader"
import { Params, QueryResponse, ReactQueryOptions } from "types/RequestType"
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
    queryFn: () => apiClient.get<QueryResponse<unknown>>({ endpoint, queryParams }),
    select: (data) => data,
  })
  useLoader({ request: list })

  return list
}

// export const useOneUserQuery = (params: { id: string } & ReactQueryOptions) => {
//   const { id, reactQueryOptions } = params
//   const endpoint = endpoints.user(id)

//   const item = useQuery({
//     ...reactQueryOptions,
//     queryKey: [endpoint, id],
//     queryFn: () => apiClient.get<QueryResponse<unknown>>({ endpoint }),
//     select: (data) => data.response,
//   })
//   useLoader({ request: item })

//   return item
// }

// export const useUserMutation = () => {
//   return useMutation({
//     mutationFn: ({ method, body, id = undefined }: Params<Partial<unknown>>) =>
//       apiClient.mutation<QueryResponse<unknown>, Partial<unknown>>({ endpoint: endpoints.user(id), body, method }),
//   })
// }