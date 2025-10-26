"use client";

import GitHubCalendar from "react-github-calendar";

export function GitHubCalendarComponent() {
  return (
    <div className="w-full [&>svg]:w-full [&>svg]:h-auto">
      <GitHubCalendar
        username="nyfong"
        year="last"
        showTotalCount={true}
        blockSize={10}
        blockMargin={3}
        blockRadius={2}
        fontSize={12}
        colorScheme="light"
        hideColorLegend={false}
        hideMonthLabels={false}
        showWeekdayLabels={false}
        style={{
          color: "hsl(var(--foreground))",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
      />
    </div>
  );
}
