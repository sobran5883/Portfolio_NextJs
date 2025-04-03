"use client";

import React, { useEffect, useState } from "react";

// ElevenLabs
import { useConversation } from "@11labs/react";

// UI
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume, Volume2, VolumeX } from "lucide-react";

const VoiceChat = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [muted, setMuted] = useState(false);

  const conversation = useConversation();
  const {status, isSpeaking} = conversation;

  const handleStartConversation = async () => {
    const conversationId = await conversation.startSession({
      agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID
    })
    console.log("Started conversation:", conversationId);
  };

  const handleEndConversation = async () => {
    await conversation.endSession();
  };

  const toggleMute = async () => {
    conversation.setVolume({
      volume : muted ? 1 : 0,
    });
    setMuted(!muted);
  };

  useEffect(()=>{
    const requestMicPermission = async () =>{
      try {
        await navigator.mediaDevices.getUserMedia({audio: true});
        setHasPermission(true);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred.");
        }
        console.error("Error requesting microphone permission:", error);
      }
    }
    requestMicPermission();
  },[])

  return (
    <Card className="w-full bg-primary max-w-md mx-auto md:mt-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h1 className="text-white">Voice Chat</h1>
          <div className="flex gap-2">
            <Button className="p-1" disabled={status !== "connected"} variant="outline" size="icon" onClick={toggleMute}>
              {muted ? (
                <VolumeX className="h-4 w-4" />
              ):(
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            {status === "connected" ? (
              <Button
                
                onClick={handleEndConversation}
                className="w-full bg-white"
              >
                <Mic className="mr-2 h-4 w-4" />
                End Conversation
              </Button>
            ):(
              <Button
                onClick={handleStartConversation}
                disabled={false}
                className="w-full"
              >
                <Mic className="mr-2 h-4 w-4" />
                Start Conversation
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceChat;
