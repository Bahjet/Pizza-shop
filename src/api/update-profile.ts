import { rejects } from 'assert'

import { api } from '@/lib/axios'

interface updateProfile {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: updateProfile) {
  await api.put('/profile', { name, description })
}
