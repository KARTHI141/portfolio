import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Testimonials } from '@/components/Testimonials';
import { AwardGallery } from '@/components/AwardGallery';
import { Resume } from '@/components/Resume';
import { Learning } from '@/components/Learning';
import { Contact } from '@/components/Contact';
import { GitHubStats } from '@/components/GitHubStats';
import { fetchGitHubRepos, fetchGitHubStats } from '@/lib/github';

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const [repos, stats] = await Promise.all([
    fetchGitHubRepos(),
    fetchGitHubStats(),
  ]);

  return (
    <>
      <Hero avatarUrl={stats?.personalAvatar} />
      <ValueProposition />
      <About />
      <GitHubStats
        stats={{
          totalRepos: stats?.totalRepos ?? 0,
          totalCommits: stats?.totalCommits ?? 0,
          followers: stats?.followers ?? 0,
          yearlyContributions: stats?.yearlyContributions ?? 156,
          contributionData: stats?.contributionData ?? [],
        }}
      />
      <Skills />
      <Experience />
      <Education />
      <Projects repos={repos} />
      <Testimonials />
      <AwardGallery />
      <Achievements />
      <Resume />
      <Learning />
      <Contact />
    </>
  );
}
