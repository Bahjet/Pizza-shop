import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

// prestar atenção no dado que esta recebendo
export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
  // prestar atenção no método que está esperando no back
}
