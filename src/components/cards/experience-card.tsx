import { Experience } from "@types/main";
import { H3, Subtitle, Body } from "@components/ui/typography";
import { Calendar, Code } from "lucide-react";
import { Chip } from "@components/ui/chip";
export function ExperienceCard({ job }: { job: Experience }) {
    return <div className="flex flex-col gap-2 mb-4 ">
        <H3>{job.position}</H3>
        <div className="flex gap-2 items-center">
            <Subtitle>{job.company}</Subtitle>
            <Calendar className="w-4 h-4 text-muted ml-1" />
            <Subtitle>{job.startDate} - {job.endDate}</Subtitle>
        </div>
        <Body>{job.description}</Body>
        <div className="flex gap-2 items-center wrap">
            <Code className="w-4 h-4 text-primary" />
            {
                job.stack.map((stack) => (
                    <Chip key={stack} label={stack} />
                ))
            }
        </div>
    </div>;
} 
