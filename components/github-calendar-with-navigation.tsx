"use client";

import GitHubCalendar from "react-github-calendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useState } from "react";

export function GitHubCalendarWithNavigation() {
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");
  const currentYear = new Date().getFullYear();

  const handlePreviousYear = () => {
    if (selectedYear === "last") {
      setSelectedYear(currentYear);
    } else if (typeof selectedYear === "number") {
      if (selectedYear === currentYear) {
        setSelectedYear("last");
      } else {
        setSelectedYear(selectedYear + 1);
      }
    }
  };

  const handleNextYear = () => {
    if (selectedYear === "last") {
      setSelectedYear(currentYear - 1);
    } else if (typeof selectedYear === "number") {
      if (selectedYear === currentYear - 2) {
        setSelectedYear("last");
      } else {
        setSelectedYear(selectedYear - 1);
      }
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Year Navigation Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">GitHub Activity</h3>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousYear}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="px-3 py-1 bg-muted rounded-md min-w-[100px] text-center">
            <span className="text-sm font-medium">
              {selectedYear === "last" ? "Last Year" : selectedYear}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNextYear}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="bg-card border rounded-lg p-6 shadow-sm">
        <GitHubCalendar
          username="nyfong"
          year={selectedYear}
          showTotalCount={true}
          blockSize={12}
          blockMargin={4}
          blockRadius={2}
          fontSize={14}
          colorScheme="light"
          hideColorLegend={false}
          hideMonthLabels={false}
          showWeekdayLabels={false}
          style={{
            color: "#000",
            width: "100%",
          }}
          labels={{
            totalCount:
              "{{count}} contributions in " +
              (selectedYear === "last" ? "the last year" : selectedYear),
          }}
        />
      </div>
    </div>
  );
}
