import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { loadJob } from '@/sanity/loader/loadQuery'
import { getSiteUrl } from '@/lib/site-url'
import { seoGenerateMetadata } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import PortableText from '@/components/PortableText'

const siteUrl = getSiteUrl()

interface PortableTextBlock {
  _type: string
  _key: string
  [key: string]: unknown
}

interface JobData {
  _id?: string
  title?: string
  slug?: string
  team?: string
  location?: string
  description?: PortableTextBlock[]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pageUrl = `${siteUrl}/careers/${slug}`

  const { data: job } = await loadJob(slug)
  if (!job) {
    return {}
  }

  const jobData = job as JobData
  const title = jobData.title ? `${jobData.title} - Careers - AgentsFlow AI` : 'Careers - AgentsFlow AI'
  const description = `Join AgentsFlow AI as a ${jobData.title || 'team member'}. ${jobData.location ? `Location: ${jobData.location}` : ''}`
  
  return seoGenerateMetadata({
    title,
    description,
    url: pageUrl,
  })
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slug) return notFound()

  const { data: job } = await loadJob(slug)

  if (!job) {
    return notFound()
  }

  const jobData = job as JobData

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
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span>/</span>
            <span className="text-[#0080FF]">{jobData.title || 'Job'}</span>
          </div>
        </div>
      </div>

      {/* Job Detail Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Job Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                {jobData.title}
              </h1>
              {jobData.location && (
                <p className="text-lg sm:text-xl text-gray-300 mb-6">
                  {jobData.location}
                </p>
              )}
              <Button
                asChild
                className="bg-[#F47F21] hover:bg-[#E06F1A] text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg transition-colors"
              >
                <Link href="mailto:jobs1@iagentsflow.com">
                  Apply For This Job
                </Link>
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-700 mb-8"></div>

            {/* Job Description */}
            {jobData.description && jobData.description.length > 0 && (
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  <PortableText blocks={jobData.description as PortableTextBlock[]} />
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="grid sm:grid-cols-2 gap-6">
                {jobData.team && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Team</p>
                    <p className="text-lg text-white font-medium">{jobData.team}</p>
                  </div>
                )}
                {jobData.location && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Location</p>
                    <p className="text-lg text-white font-medium">{jobData.location}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Back to Careers Link */}
            <div className="mt-12 text-center">
              <Link
                href="/careers"
                className="text-[#0080FF] hover:text-[#0066CC] transition-colors inline-flex items-center gap-2"
              >
                ← Back to Job Openings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
