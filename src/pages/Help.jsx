import React, { useState } from 'react';
import { HelpCircle, Search, Book, MessageCircle, Mail } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: "How do I create a new project?",
      answer: "To create a new project, click the 'New Project' button in the Projects section. Fill in the required details like project name, description, start date, and team members."
    },
    {
      id: 2,
      question: "How can I add team members to a project?",
      answer: "Navigate to your project, go to the Team tab, and click 'Add Member'. You can invite team members by email or select from existing users."
    },
    {
      id: 3,
      question: "How do I track project progress?",
      answer: "Project progress is automatically calculated based on completed tasks. You can view detailed progress in the Dashboard or individual project pages."
    },
    {
      id: 4,
      question: "Can I export project data?",
      answer: "Yes, you can export project data from the Analytics section. Various formats are available including PDF and CSV."
    },
    {
      id: 5,
      question: "How do I change my password?",
      answer: "Go to Settings > Security tab, enter your current password, then set your new password. Make sure to use a strong password."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
        <p className="text-gray-600 mt-1">Find answers to common questions and get support</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            type="text"
            placeholder="Search help articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="text-gray-500 text-center py-8">No FAQs match your search.</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Documentation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Documentation</h3>
                <p className="text-sm text-gray-600">Comprehensive guides and tutorials</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">View Documentation</Button>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-600">Chat with our support team</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">Start Chat</Button>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email Support</h3>
                <p className="text-sm text-gray-600">Send us an email</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">Send Email</Button>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">System Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Status</span>
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">File Storage</span>
                <span className="text-sm font-medium text-green-600">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
