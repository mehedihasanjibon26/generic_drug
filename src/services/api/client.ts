import { apiBaseUrl } from '@/services/api/config'

export async function apiRequest<T>(path: `/${string}`, init?: RequestInit): Promise<T> {
  if (!apiBaseUrl) {
    throw new Error('VITE_API_BASE_URL is not configured')
  }

  const response = await fetch(`${apiBaseUrl}${path}`, init)

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}
