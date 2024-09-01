import AboutMe from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import WorksSection from "@/components/WorksSection";
import WritingsSection from "@/components/WritingsSection";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center mt-10">
        <AboutMe />
      </section>
      <div className="animated-element container prose dark:prose-invert py-6 max-w-2xl mx-auto">
        <SkillsSection />
        <WritingsSection />
        <WorksSection />
      </div>
    </>
  );
}
