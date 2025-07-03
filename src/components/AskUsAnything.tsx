
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AskUsAnything() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ask us anything
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about your FootFall analytics? Need help understanding your data? 
          Our team is here to help you make the most of your insights.
        </p>
      </div>

      {/* Main Chat Interface */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Chat with our analytics team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Chat Messages Area */}
          <div className="bg-gray-50 rounded-lg p-6 min-h-[400px] space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
                <p className="text-gray-800">
                  Hello! I'm here to help you understand your FootFall analytics. 
                  What would you like to know about your data?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex space-x-4">
            <Input 
              placeholder="Type your question here..." 
              className="flex-1 h-12 text-lg"
            />
            <Button className="h-12 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Send className="w-5 h-5 mr-2" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">Quick questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "How do I interpret my NPS scores?",
              "What do the trip insights tell me?",
              "How can I improve customer satisfaction?",
              "What's the best way to track foot traffic?",
              "How do I understand peak visiting times?",
              "What actions should I take based on my data?"
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left justify-start h-auto p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300"
              >
                {question}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
