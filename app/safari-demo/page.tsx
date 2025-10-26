import {
  SafariDemo,
  SafariSwaggerDemo,
  SafariVideoDemo,
} from "@/components/safari-demo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SafariDemoPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Safari Component Demo</h1>
        <p className="text-muted-foreground text-lg">
          Showcasing MagicUI Safari component with backend API documentation
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Safari Demo
              <Badge variant="secondary">MagicUI</Badge>
            </CardTitle>
            <CardDescription>
              A simple Safari browser window component with custom URL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <SafariDemo />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Swagger UI Documentation
              <Badge variant="outline">API Docs</Badge>
            </CardTitle>
            <CardDescription>
              Safari component displaying backend API documentation with Swagger
              UI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <SafariSwaggerDemo />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Video Content Demo
              <Badge variant="secondary">Media</Badge>
            </CardTitle>
            <CardDescription>
              Safari component with video content support for interactive demos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <SafariVideoDemo />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integration Features</CardTitle>
            <CardDescription>
              Key features of the Safari component for API documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Browser UI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Realistic Safari browser window</li>
                  <li>• Customizable URL display</li>
                  <li>• Traffic light controls</li>
                  <li>• Address bar with navigation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Content Display</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Image and video support</li>
                  <li>• Responsive design</li>
                  <li>• Dark mode compatible</li>
                  <li>• Custom content integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
