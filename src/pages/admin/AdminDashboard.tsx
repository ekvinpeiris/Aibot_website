
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight, Users, MessageCircle, LineChart as LineChartIcon, BarChart2 } from "lucide-react";

const AdminDashboard = () => {
  // Sample data for charts
  const visitorData = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 1900 },
    { name: "Mar", value: 1500 },
    { name: "Apr", value: 2400 },
    { name: "May", value: 2700 },
  ];

  const conversionData = [
    { name: "Jan", value: 320 },
    { name: "Feb", value: 450 },
    { name: "Mar", value: 280 },
    { name: "Apr", value: 580 },
    { name: "May", value: 690 },
  ];

  const sourceData = [
    { name: "Organic", value: 40 },
    { name: "Direct", value: 30 },
    { name: "Referral", value: 15 },
    { name: "Social", value: 15 },
  ];

  const COLORS = ["#2D6A4F", "#40916C", "#52B788", "#74C69D"];

  const chatbotStats = [
    { name: "Total Conversations", value: 12547, change: 12.5, icon: MessageCircle },
    { name: "New Leads", value: 378, change: 8.2, icon: Users },
    { name: "Avg. Conversation Time", value: "3m 24s", change: -4.5, icon: LineChartIcon },
    { name: "Conversion Rate", value: "18.2%", change: 2.3, icon: BarChart2 },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chatbotStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.change > 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={stat.change > 0 ? "text-green-500" : "text-red-500"}>
                  {Math.abs(stat.change)}%
                </span>
                <span className="text-muted-foreground text-xs ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Website Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visitorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem"
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2D6A4F" 
                    strokeWidth={2} 
                    dot={{ r: 4, fill: "#2D6A4F", stroke: "#2D6A4F", strokeWidth: 1 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem"
                    }} 
                  />
                  <Bar dataKey="value" fill="#40916C" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem"
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "John Doe", action: "submitted a lead form", time: "2 minutes ago" },
                { user: "Sarah Johnson", action: "engaged with chatbot", time: "15 minutes ago" },
                { user: "Michael Chen", action: "downloaded whitepaper", time: "45 minutes ago" },
                { user: "Emily Rodriguez", action: "requested a demo", time: "1 hour ago" },
                { user: "David Kim", action: "subscribed to newsletter", time: "3 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-accent/50">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
