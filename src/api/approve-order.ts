import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}

// prestar atenção no dado que esta recebendo
export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
  // prestar atenção no método que está esperando no back
}
