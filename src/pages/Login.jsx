/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { BarChart3, Users, CheckCircle, Calendar } from 'lucide-react';

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    setLoginLoading(true);
    setError('');
    
    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Login Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                  <p className="text-gray-600">Sign in to your project management dashboard</p>
                </div>
                
                <LoginForm onLogin={handleLogin} loading={loginLoading} />
                
                {error && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Demo credentials: <br />
                    <span className="font-medium">admin@example.com</span> / <span className="font-medium">password123</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Features */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 text-white">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6">Powerful Project Management</h2>
                <p className="text-blue-100 mb-8">
                  Streamline your workflow with our comprehensive project management solution.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Analytics</h3>
                      <p className="text-blue-100 text-sm">Track project progress with detailed insights and reporting.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Team Collaboration</h3>
                      <p className="text-blue-100 text-sm">Work together seamlessly with your team members.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Task Management</h3>
                      <p className="text-blue-100 text-sm">Organize and prioritize tasks efficiently.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Deadline Tracking</h3>
                      <p className="text-blue-100 text-sm">Never miss important deadlines with smart reminders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;