'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Icons } from "@/components/ui/icons"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from 'next/link'

export default function SignInPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError('')

        // Simulating an API call
        setTimeout(() => {
            setIsLoading(false)
            // Simulating an error for demonstration
            setError('Invalid email or password. Please try again.')
        }, 2000)
    }

    return (
        <div className="container relative min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                        <Button variant="outline">
                            {/*<Icons.gitHub className="mr-2 h-4 w-4" />*/}
                            GitHub
                        </Button>
                        <Button variant="outline">
                            {/*<Icons.google className="mr-2 h-4 w-4" />*/}
                            Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="current-password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <Button className="mt-2" disabled={isLoading}>
                                {/*{isLoading ? (*/}
                                {/*    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />*/}
                                {/*) : (*/}
                                {/*    <Icons.login className="mr-2 h-4 w-4" />*/}
                                {/*)}*/}
                                Sign In
                            </Button>
                        </div>
                    </form>
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-muted-foreground">
                        <Link className="hover:text-primary underline underline-offset-4" href="/forgot-password">
                            Forgot your password?
                        </Link>
                    </div>
                    <div className="text-sm text-center text-muted-foreground">
                        Don't have an account?{' '}
                        <Link className="hover:text-primary underline underline-offset-4" href="/signup">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}