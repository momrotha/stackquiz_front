
import CreateQuizSection from "@/components/hompage/Create_quiz_section";
import { CTASection } from "@/components/hompage/Cta_section";
import { FeedbackQuiz } from "@/components/hompage/Feedback_section";
import { HeroSection } from "@/components/hompage/Hero_section";
import { PlatformSection } from "@/components/hompage/Plateform_section";
import { StatsSection } from "@/components/hompage/State_section";
import  {TopPlayersSection}  from "@/components/hompage/Top_player";
import {QuizTypeComponent} from "@/components/hompage/Type_quiz";
import { WhyChooseSection } from "@/components/hompage/Why_chose_section";

export default function HomePage() {
  return (
    <div>
      <main className="py-12">
        <HeroSection />
        <StatsSection />
        <CreateQuizSection />
        <WhyChooseSection />
        <PlatformSection />
        <FeedbackQuiz />
        <TopPlayersSection />
        <QuizTypeComponent />
        <CTASection />
      </main>
    </div>
  );
}


