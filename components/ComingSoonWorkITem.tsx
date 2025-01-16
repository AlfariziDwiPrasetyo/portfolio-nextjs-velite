import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

function ComingSoonWorkItem() {
  return (
    <Card className="w-full mb-3 sm:mb-2 md:mb-0 max-w-full blur-xs">
      <CardHeader>
        <CardTitle>Coming soon</CardTitle>
        <CardDescription className="flex">Coming soon</CardDescription>
      </CardHeader>
      <CardContent className="h-20"></CardContent>
      <CardFooter className=" justify-end">Next Project</CardFooter>
    </Card>
  );
}

export default ComingSoonWorkItem;
