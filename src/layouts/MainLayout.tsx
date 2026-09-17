import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="min-h-dvh">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
