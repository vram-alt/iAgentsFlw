import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { seoGenerateMetadata } from '@/components/Seo'
import { getSiteUrl } from '@/lib/site-url'
import { loadAllJobs } from '@/sanity/loader/loadQuery'
import { Suspense } from 'react'

const siteUrl = getSiteUrl()

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = `${siteUrl}/careers`

  return seoGenerateMetadata({
    title: 'Careers - AgentsFlow AI',
    description: 'Join AgentsFlow AI and help organizations effectively and efficiently comply with global privacy and security regulations. Build a diverse, connected team with meaningful work.',
    url: pageUrl,
    tags: ['servicenow-ai-control-tower-implementation'],
  })
}

interface Job {
  _id: string
  title: string
  slug: string
  excerpt?: string
  team: string
  location: string
  employmentType?: string
  workMode?: string
  experience?: string
  featured?: boolean
}

const employmentTypeLabels: Record<string, string> = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  CONTRACTOR: 'Contract',
  TEMPORARY: 'Temporary',
  INTERN: 'Internship',
}

const workModeLabels: Record<string, string> = {
  onsite: 'On Site',
  remote: 'Remote',
  hybrid: 'Hybrid',
}

async function JobListings() {
  const { data: jobs } = await loadAllJobs()
  console.log('Loaded jobs:', jobs)

  if (!jobs || !Array.isArray(jobs) || jobs.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-400">
          No open positions at the moment. Please check back later or{' '}
          <Link href="/contact" className="text-[#0080FF] hover:underline">
            contact us
          </Link>
          {' '}to learn more about future opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {(jobs as Job[]).map((job) => (
        <div
          key={job._id}
          className="flex flex-col gap-4 rounded-xl border-2 border-white/20 bg-[#172135] p-6 transition-colors hover:border-[#0080FF]/50 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-8"
        >
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {job.featured && (
                <span className="rounded-full border border-[#F47F21]/30 bg-[#F47F21]/20 px-2.5 py-0.5 text-xs font-semibold text-[#F47F21]">
                  Featured
                </span>
              )}
              {job.employmentType && (
                <span className="rounded-full border border-[#0080FF]/20 bg-[#0080FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#0080FF]">
                  {employmentTypeLabels[job.employmentType] ?? job.employmentType}
                </span>
              )}
              {job.workMode && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-300">
                  {workModeLabels[job.workMode] ?? job.workMode}
                </span>
              )}
            </div>

            <h3 className="mb-2 font-display text-xl font-bold text-white sm:text-2xl">
              {job.title}
            </h3>

            {job.excerpt && (
              <p className="mb-3 line-clamp-2 text-sm text-gray-400">{job.excerpt}</p>
            )}

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
              <span>{job.team}</span>
              <span className="text-white/20">·</span>
              <span>{job.location}</span>
              {job.experience && (
                <>
                  <span className="text-white/20">·</span>
                  <span>{job.experience}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button
              asChild
              className="w-full rounded-lg bg-[#F47F21] px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-[#E06F1A] sm:w-auto sm:px-8 sm:py-4"
            >
              <Link href={`/careers/${job.slug}`}>
                View & Apply
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-[#0F172A]/30 pt-20">
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-white">
              AgentsFlow
            </Link>
            <span>/</span>
            <span className="text-[#0080FF]">Careers</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                AgentsFlow is for <span className="text-gradient">Everyone</span>
              </h1>

              <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:space-y-6 sm:text-base md:text-lg">
                <p>
                  As the number of consumers exercising their data privacy rights continues to grow, and global privacy and security regulations become increasingly restrictive, organizations face unprecedented challenges in maintaining compliance.
                </p>

                <p className="font-semibold text-white">
                  Our mission is to enable organizations to effectively and efficiently comply with the massive number of ongoing updates and changes in global privacy and security regulations.
                </p>

                <p>
                  We are building a strong, diverse team of curious, creative people who support each other. We believe that diverse backgrounds and skill sets make teams stronger, and we are committed to ensuring that every member of our team feels they belong.
                </p>

                <p>
                  At AgentsFlow, we are working to develop a diverse, connected team where everyone has the opportunity to do meaningful work and be recognized for their contributions. We are committed to creating a culture where everyone has the opportunity for meaningful work and recognition.
                </p>
              </div>

              <div className="pt-4">
                <p className="mb-6 text-base text-gray-300 sm:text-lg md:text-xl">
                  If this sounds like the type of work environment you are searching for,{' '}
                  <span className="font-bold text-white">join us!</span>
                </p>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-[#172135] to-[#0F172A] p-8 sm:h-[600px]">
                <img
                  src="https://iagentsflow.com/images/careers.png"
                  alt="Careers at AgentsFlow"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="open-positions" className="bg-[#0F172A]/30 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Job <span className="text-gradient">Openings</span>
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 bg-[#F47F21]"></div>
          </div>

          <Suspense
            fallback={
              <div className="py-12 text-center">
                <p className="text-lg text-gray-400">Loading job openings...</p>
              </div>
            }
          >
            <JobListings />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
