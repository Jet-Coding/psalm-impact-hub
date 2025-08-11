import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Target, AlertCircle, ArrowRight } from "lucide-react";

const departments = [
  {
    name: "Campus Ministry",
    head: "Pastor Mark Santos",
    members: 45,
    activities: ["Weekly Bible Studies", "Outreach Programs", "Discipleship"],
    achievements: ["Reached 200+ students this semester", "Established 8 new cell groups"],
    challenges: ["Limited campus access during pandemic", "Need more volunteer leaders"],
    nextSteps: ["Recruit 5 new leaders", "Launch online discipleship program"]
  },
  {
    name: "Youth Ministry",
    head: "Ptr. Sarah Lopez",
    members: 32,
    activities: ["Youth Camps", "Leadership Training", "Community Service"],
    achievements: ["Successful youth camp with 120 attendees", "Trained 15 youth leaders"],
    challenges: ["Venue limitations", "Transportation costs"],
    nextSteps: ["Secure permanent venue", "Establish scholarship fund"]
  },
  {
    name: "Missions Department",
    head: "Rev. David Kim",
    members: 28,
    activities: ["Cross-cultural Training", "Mission Trips", "Partnership Development"],
    achievements: ["Sent 12 missionaries overseas", "Established 3 new partnerships"],
    challenges: ["Funding shortfalls", "Visa processing delays"],
    nextSteps: ["Increase monthly support", "Streamline application process"]
  },
  {
    name: "Training & Development",
    head: "Dr. Grace Tan",
    members: 18,
    activities: ["Leadership Workshops", "Theological Training", "Skills Development"],
    achievements: ["Graduated 25 leaders", "Launched online courses"],
    challenges: ["Need updated curriculum", "Technology infrastructure"],
    nextSteps: ["Upgrade learning platform", "Develop specialized tracks"]
  }
];

export default function Departments() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
          <p className="text-muted-foreground">
            Manage department information and track ministry activities
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Department
        </Button>
      </div>

      {/* Departments Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {departments.map((dept, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Head: {dept.head}
                  </p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {dept.members}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Main Activities */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Target className="h-4 w-4 text-primary" />
                  Main Activities
                </h4>
                <div className="flex flex-wrap gap-1">
                  {dept.activities.map((activity, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-sm font-medium mb-2 text-ministry-green">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {dept.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-ministry-green mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-medium mb-2 text-orange-600">
                  <AlertCircle className="h-4 w-4" />
                  Challenges
                </h4>
                <ul className="space-y-1">
                  {dept.challenges.map((challenge, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-medium mb-2 text-primary">
                  <ArrowRight className="h-4 w-4" />
                  Next Steps
                </h4>
                <ul className="space-y-1">
                  {dept.nextSteps.map((step, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}