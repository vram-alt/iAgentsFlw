import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
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
  })
}

interface Job {
  _id: string
  title: string
  slug: string
  team: string
  location: string
  description?: unknown
}

async function JobListings() {
  const { data: jobs } = await loadAllJobs()

  if (!jobs || !Array.isArray(jobs) || jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">
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
    <div className="space-y-6 max-w-4xl mx-auto">
      {jobs.map((job: Job) => (
        <div
          key={job._id}
          className="bg-[#172135] border-2 border-white/20 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 hover:border-[#0080FF]/50 transition-colors"
        >
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              {job.title}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm sm:text-base">
                <span className="text-gray-400">Team:</span> {job.team}
              </p>
              <p className="text-sm sm:text-base">
                <span className="text-gray-400">Location:</span> {job.location}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button
              asChild
              className="bg-[#F47F21] hover:bg-[#E06F1A] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-colors w-full sm:w-auto"
            >
              <Link href={`/careers/${job.slug}`}>
                Apply Now
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
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              AgentsFlow.com
            </Link>
            <span>/</span>
            <span className="text-[#0080FF]">Careers</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-2xl sm:text-3xl font-display font-bold leading-tight text-white">
                AgentsFlow is for <span className="text-gradient">Everyone</span>
              </h1>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
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
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                  If this sounds like the type of work environment you are searching for,{' '}
                  <span className="font-bold text-white">join us!</span>
                </p>
               
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative w-full h-[500px] sm:h-[600px] bg-gradient-to-br from-[#172135] to-[#0F172A] rounded-2xl border-2 border-white/20 p-8 overflow-hidden">
                <Image
                  src="/images/careers.png"
                  alt="Careers at AgentsFlow"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="open-positions" className="py-12 sm:py-16 md:py-20 bg-[#0F172A]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
              Job <span className="text-gradient">Openings</span>
            </h2>
            <div className="w-24 h-1 bg-[#F47F21] mx-auto mt-2"></div>
          </div>

          <Suspense
            fallback={
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Loading job openings...</p>
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
