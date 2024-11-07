'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Loader2, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TranscriptionPage() {
    const [file, setFile] = useState<File | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [transcription, setTranscription] = useState('')
    const [error, setError] = useState('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            setError('')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) {
            setError('Please select a file to transcribe.')
            return
        }

        setIsProcessing(true)
        setTranscription('')
        setError('')

        // Simulating backend processing
        setTimeout(() => {
            setIsProcessing(false)
            setTranscription("This is a simulated transcription of the uploaded audio or video file. In a real application, this text would be the result of processing the file on the backend using speech recognition technology.")
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Audio/Video Transcription</CardTitle>
                    <CardDescription>Upload an audio or video file to get its transcription</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="file">Upload file</Label>
                                <Input
                                    id="file"
                                    type="file"
                                    accept="audio/*,video/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            {file && (
                                <p className="text-sm text-muted-foreground">
                                    Selected file: {file.name}
                                </p>
                            )}
                            <Button type="submit" disabled={isProcessing}>
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="mr-2 h-4 w-4" />
                                        Transcribe
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {transcription && (
                        <div className="space-y-2 w-full">
                            <Label htmlFor="transcription">Transcription Result</Label>
                            <Textarea
                                id="transcription"
                                value={transcription}
                                readOnly
                                className="min-h-[200px]"
                            />
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}