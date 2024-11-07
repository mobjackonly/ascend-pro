'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export default function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Acme Inc
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;This platform has transformed how we handle our daily operations. It's intuitive, powerful, and a joy to use.&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create an account</CardTitle>
                            <CardDescription>
                                Enter your details below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-6">
                                <Button variant="outline">
                                    {/*<Icons.gitHub className="mr-2 h-4 w-4" />*/}
                                    Github
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
                                            autoComplete="new-password"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <Button disabled={isLoading}>
                                        {/*{isLoading && (*/}
                                        {/*    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />*/}
                                        {/*)}*/}
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <p className="px-8 text-center text-sm text-muted-foreground">
                                By clicking continue, you agree to our{" "}
                                <a
                                    href="/terms"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/privacy"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}