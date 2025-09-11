import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { action, email, password } = await request.json()
    
    // Simple mock authentication - replace with real auth logic
    if (action === 'login') {
      if (email === 'admin@ahsanbashir.com' && password === 'admin123') {
        return NextResponse.json({
          success: true,
          user: { email, role: 'admin' },
          token: 'mock-jwt-token'
        })
      }
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 })
  }
}