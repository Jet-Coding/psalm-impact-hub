import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  Contact,
  BookOpen,
  FileText,
  DollarSign,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the PSALM Organization Reporting System. Here's your ministry overview.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Active Members"
          value="287"
          change="+12 this month"
          changeType="positive"
          icon={Users}
          description="Across all departments"
        />
        <MetricCard
          title="Campus Missionaries"
          value="24"
          change="+3 new this quarter"
          changeType="positive"
          icon={GraduationCap}
          description="Active on campuses"
        />
        <MetricCard
          title="CCL Contacts"
          value="156"
          change="+18 this month"
          changeType="positive"
          icon={Contact}
          description="Christ-Centered Leaders"
        />
        <MetricCard
          title="Training Sessions"
          value="8"
          change="2 scheduled this week"
          changeType="neutral"
          icon={BookOpen}
          description="Completed this month"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="AIG Reports Submitted"
          value="47"
          change="89% completion rate"
          changeType="positive"
          icon={FileText}
          description="This month"
        />
        <MetricCard
          title="Monthly Income"
          value="₱125,450"
          change="+8.2% from last month"
          changeType="positive"
          icon={DollarSign}
          description="Total ministry funds"
        />
        <MetricCard
          title="Prayer Requests"
          value="23"
          change="5 answered this week"
          changeType="positive"
          icon={Heart}
          description="Active requests"
        />
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Submit New AIG Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Add New Member
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Schedule Training Session
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Contact className="mr-2 h-4 w-4" />
              Add CCL Contact
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-3 w-3 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">New member added</p>
                <p className="text-xs text-muted-foreground">
                  John Dela Cruz joined Campus Ministry - 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10">
                <FileText className="h-3 w-3 text-secondary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">AIG Report submitted</p>
                <p className="text-xs text-muted-foreground">
                  Campus Ministry - UP Diliman - 4 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ministry-green/10">
                <BookOpen className="h-3 w-3 text-ministry-green" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Training completed</p>
                <p className="text-xs text-muted-foreground">
                  Leadership Development Workshop - Yesterday
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Income</p>
              <p className="text-2xl font-bold text-ministry-green">₱125,450</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Expenses</p>
              <p className="text-2xl font-bold">₱98,230</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Net Balance</p>
              <p className="text-2xl font-bold text-primary">₱27,220</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}