import { IconCloudDemo } from "@/components/icon-cloud-demo";

export default function IconCloudDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">IconCloud Demo</h1>
          <p className="text-muted-foreground">
            Interactive 3D cloud of technology icons. Click and drag to rotate!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[600px] h-[600px] border rounded-lg bg-muted/20">
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
