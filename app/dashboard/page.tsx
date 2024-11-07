'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import {
    BarChart,
    Calendar as CalendarIcon,
    Users,
    Brain,
    Video,
    Plus,
    ArrowUpRight,
    Clock,
    MessageSquare,
} from "lucide-react"

export default function Dashboard() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex min-h-screen flex-col gap-8 p-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Welcome back, Adil</h1>
                    <p className="text-muted-foreground">Here's what's happening with your workspace today.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Meeting
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                        <Video className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Skills in Progress</CardTitle>
                        <Brain className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Python, React, Leadership</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Personas</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7</div>
                        <p className="text-xs text-muted-foreground">2 recently updated</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hours Saved</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32.5</div>
                        <p className="text-xs text-muted-foreground">Using AI summaries</p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <Tabs defaultValue="meetings" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="meetings">Meetings</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="personas">Personas</TabsTrigger>
                </TabsList>
                <TabsContent value="meetings" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Upcoming Meetings</CardTitle>
                                <CardDescription>You have 3 meetings scheduled for today</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {['Team Sync', 'Project Review', 'Client Meeting'].map((meeting) => (
                                        <div key={meeting} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-2 bg-primary/10 rounded-full">
                                                    <Video className="h-4 w-4 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">{meeting}</p>
                                                    <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm">
                                                Join <ArrowUpRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Calendar</CardTitle>
                                <CardDescription>Schedule and manage your meetings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="skills" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {['Python Development', 'React Framework', 'Leadership Skills'].map((skill) => (
                            <Card key={skill}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{skill}</CardTitle>
                                    <CardDescription>In progress - 45% completed</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Progress value={45} className="mb-4" />
                                    <div className="space-y-2">
                                        <p className="text-sm text-muted-foreground">Next milestone:</p>
                                        <p className="text-sm font-medium">Complete Advanced Topics</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="personas" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {['Team Lead', 'Project Manager', 'Senior Developer'].map((persona) => (
                            <Card key={persona}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{persona}</CardTitle>
                                    <CardDescription>Active simulation profile</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/10 rounded-full">
                                                <Users className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium">Interaction Score</p>
                                                    <p className="text-sm text-muted-foreground">85%</p>
                                                </div>
                                                <Progress value={85} className="mt-2" />
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            Start Simulation
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}