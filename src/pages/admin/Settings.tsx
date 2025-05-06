
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Settings = () => {
  const [companyName, setCompanyName] = useState("ChatAI");
  const [emailAddress, setEmailAddress] = useState("admin@chatai.com");
  const [websiteUrl, setWebsiteUrl] = useState("https://chatai.com");
  const [chatbotName, setChatbotName] = useState("ChatAI Assistant");
  const [primaryColor, setPrimaryColor] = useState("#2D6A4F");
  const [welcomeMessage, setWelcomeMessage] = useState("Hello! How can I assist you today?");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);
  const [autoResponderEnabled, setAutoResponderEnabled] = useState(true);

  const handleSaveGeneral = () => {
    toast.success("General settings saved successfully");
  };

  const handleSaveChatbot = () => {
    toast.success("Chatbot settings saved successfully");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification settings saved successfully");
  };

  const handleResetSettings = () => {
    toast.success("Settings reset to defaults");
  };

  return (
    <AdminLayout title="Settings">
      <div className="space-y-8">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Manage your company profile and contact information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input 
                id="company-name" 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={emailAddress} 
                onChange={(e) => setEmailAddress(e.target.value)} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input 
                id="website" 
                value={websiteUrl} 
                onChange={(e) => setWebsiteUrl(e.target.value)} 
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
            <Button onClick={handleSaveGeneral}>Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Chatbot Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Configuration</CardTitle>
            <CardDescription>
              Customize how your chatbot appears and behaves on your website.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chatbot-name">Chatbot Name</Label>
              <Input 
                id="chatbot-name" 
                value={chatbotName} 
                onChange={(e) => setChatbotName(e.target.value)} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex gap-2">
                <Input 
                  id="primary-color" 
                  value={primaryColor} 
                  onChange={(e) => setPrimaryColor(e.target.value)} 
                />
                <div 
                  className="h-10 w-10 rounded border" 
                  style={{ backgroundColor: primaryColor }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="welcome-message">Welcome Message</Label>
              <Textarea 
                id="welcome-message" 
                value={welcomeMessage} 
                onChange={(e) => setWelcomeMessage(e.target.value)} 
                rows={3}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-responder">Auto-Responder</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically respond to common questions.
                </p>
              </div>
              <Switch 
                id="auto-responder" 
                checked={autoResponderEnabled}
                onCheckedChange={setAutoResponderEnabled}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
            <Button onClick={handleSaveChatbot}>Save Changes</Button>
          </CardFooter>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Configure how you receive alerts and notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about new leads and interactions.
                </p>
              </div>
              <Switch 
                id="email-notifications" 
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="slack-notifications">Slack Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive real-time alerts in your Slack workspace.
                </p>
              </div>
              <Switch 
                id="slack-notifications" 
                checked={slackNotifications}
                onCheckedChange={setSlackNotifications}
              />
            </div>
            {slackNotifications && (
              <div className="space-y-2">
                <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                <Input id="slack-webhook" placeholder="https://hooks.slack.com/services/..." />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleResetSettings}>Reset</Button>
            <Button onClick={handleSaveNotifications}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Settings;
