import { api } from '@/lib/axios'

export interface DeliverOrderParams {
  orderId: string
}

// prestar atenção no dado que esta recebendo
export async function deliverOrder({ orderId }: DeliverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
  // prestar atenção no método que está esperando no back
}
