import { Safari } from "@/components/ui/safari";

export function SafariDemo() {
  return (
    <div className="w-[1203px]">
      <Safari url="api.docs" />
    </div>
  );
}

export function SafariSwaggerDemo() {
  return (
    <div className="w-[1203px]">
      <Safari url="api.docs/swagger" imageSrc="/swagger.png" />
    </div>
  );
}

export function SafariVideoDemo() {
  return (
    <div className="w-[1203px]">
      <Safari
        url="demo.video"
        videoSrc="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
      />
    </div>
  );
}
