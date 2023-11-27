import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skDPtCrjgfRMXw9UdjOlrMwqVBJFhPE4bO0EuLq2SZk5EwdT9eIHElSiK6cFK9j5RsBvWBYu3ibRh5m2QWNFr8phaitVG2AztaLre6M2OakNHP5Wc8KtBcvq1nLOkDtN0Gh09r4JvRmSNhqCfRLnCb6jFV07DWXQcfVj7GJK7Ppu2KyuK2x5"
})
