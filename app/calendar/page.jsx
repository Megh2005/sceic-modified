import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";

export default function TimelineDemo() {
    const data = [
        {
            title: "December 20, 2024",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
                        Full Paper Submission Deadline
                    </p>
                </div>
            ),
        },
        {
            title: "November 22, 2024",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
                        Registration For SCEIC 2025 Start
                    </p>
                </div>
            ),
        },
        {
            title: "January 1, 2025",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
                        Registration For SCEIC 2025 End
                    </p>
                </div>
            ),
        },
        {
            title: "January 16, 2025",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
                       SCEIC 2025 Grand Event Start
                    </p>
                </div>
            ),
        },
        {
            title: "January 17, 2025",
            content: (
                <div>
                    <p
                        className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-bold mb-8">
                       SCEIC 2025 Grand Event End
                    </p>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
