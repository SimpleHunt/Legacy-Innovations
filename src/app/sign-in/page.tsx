import LoginCard from '@/components/LoginCard'
import React from 'react'


const LoginPage = () => {
  return (
   
    <div className="h-screen flex items-center justify-center ">
      <div>
        
        <LoginCard  type="Login IN"/>
        
        <div className="text-center text-sm mt-6 text-gray-600">
          2025 © — By <span className="text-blue-500">SmartHub</span>
        </div>
      </div>
    </div>
    
  )
}

export default LoginPage
