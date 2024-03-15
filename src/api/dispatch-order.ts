import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

// prestar atenção no dado que esta recebendo
export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
  // prestar atenção no método que está esperando no back
}
