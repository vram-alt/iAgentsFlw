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
  children?: Array<{ _key: string; _type: string; text: string; marks?: string[] }>
  [key: string]: unknown
}

interface JobData {
  _id?: string
  title?: string
  slug?: string
  excerpt?: string
  team?: string
  location?: string
  employmentType?: string
  workMode?: string
  experience?: string
  skills?: string[]
  description?: PortableTextBlock[]
  applyUrl?: string
  datePosted?: string
  validThrough?: string
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  featured?: boolean
  seo?: { metaTitle?: string; metaDescription?: string }
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

const countryCodeMap: Record<string, string> = {
  India: 'IN',
  'United States': 'US',
  'United Kingdom': 'GB',
  Canada: 'CA',
  Australia: 'AU',
}

function portableTextToPlainText(blocks: PortableTextBlock[]): string {
  return blocks
    .filter((b) => b._type === 'block')
    .map((b) => (b.children ?? []).map((c) => c.text).join(''))
    .join('\n\n')
}

function parseLocation(location: string) {
  const parts = location.split(',').map((p) => p.trim())
  const countryRaw = parts[parts.length - 1] ?? ''
  return {
    addressLocality: parts[0] ?? location,
    addressRegion: parts.length >= 3 ? parts[1] : undefined,
    addressCountry: countryCodeMap[countryRaw] ?? countryRaw,
  }
}

function buildJsonLd(jobData: JobData) {
  const descriptionText =
    jobData.excerpt ??
    (jobData.description ? portableTextToPlainText(jobData.description) : '') ??
    ''

  const locationParsed = jobData.location ? parseLocation(jobData.location) : null
  const currency = jobData.salaryCurrency ?? 'INR'
  const hasSalary = jobData.salaryMin || jobData.salaryMax

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobData.title,
    description: descriptionText,
    datePosted: jobData.datePosted,
    validThrough: jobData.validThrough,
    employmentType: jobData.employmentType ?? 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'AgentsFlow AI',
      sameAs: 'https://iagentsflow.com',
      logo: 'https://iagentsflow.com/images/logo.png',
    },
  }

  if (locationParsed) {
    jsonLd.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...(locationParsed.addressLocality && { addressLocality: locationParsed.addressLocality }),
        ...(locationParsed.addressRegion && { addressRegion: locationParsed.addressRegion }),
        ...(locationParsed.addressCountry && { addressCountry: locationParsed.addressCountry }),
      },
    }
  }

  if (hasSalary) {
    jsonLd.baseSalary = {
      '@type': 'MonetaryAmount',
      currency,
      value: {
        '@type': 'QuantitativeValue',
        ...(jobData.salaryMin && { minValue: jobData.salaryMin }),
        ...(jobData.salaryMax && { maxValue: jobData.salaryMax }),
        unitText: 'YEAR',
      },
    }
  }

  return jsonLd
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pageUrl = `${siteUrl}/careers/${slug}`

  const { data: job } = await loadJob(slug)
  if (!job) return {}

  const jobData = job as JobData
  const title = jobData.seo?.metaTitle ?? (jobData.title ? `${jobData.title} - Careers - AgentsFlow AI` : 'Careers - AgentsFlow AI')
  const description = jobData.seo?.metaDescription ?? `Join AgentsFlow AI as a ${jobData.title || 'team member'}. ${jobData.location ? `Location: ${jobData.location}` : ''}`

  return seoGenerateMetadata({ title, description, url: pageUrl, tags: ['servicenow-ai-control-tower-implementation'] })
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!slug) return notFound()

  const { data: job } = await loadJob(slug)
  if (!job) return notFound()

  const jobData = job as JobData

  const applyHref = jobData.applyUrl
    ? jobData.applyUrl.includes('@')
      ? `mailto:${jobData.applyUrl}`
      : jobData.applyUrl
    : 'mailto:jobs1@iagentsflow.com'


  console.log('applyHref',applyHref)

  const postedDate = jobData.datePosted
    ? new Date(jobData.datePosted).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  const validDate = jobData.validThrough
    ? new Date(jobData.validThrough).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  const hasSalary = jobData.salaryMin || jobData.salaryMax
  const currency = jobData.salaryCurrency ?? 'INR'
  const jsonLd = buildJsonLd(jobData)

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">AgentsFlow</Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-[#0080FF]">{jobData.title ?? 'Job'}</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="mb-10">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {jobData.featured && (
                  <span className="text-xs font-semibold bg-[#F47F21]/20 text-[#F47F21] border border-[#F47F21]/30 rounded-full px-2.5 py-0.5">
                    Featured
                  </span>
                )}
                {jobData.employmentType && (
                  <span className="text-xs font-medium bg-[#0080FF]/10 text-[#0080FF] border border-[#0080FF]/20 rounded-full px-2.5 py-0.5">
                    {employmentTypeLabels[jobData.employmentType] ?? jobData.employmentType}
                  </span>
                )}
                {jobData.workMode && (
                  <span className="text-xs font-medium bg-white/5 text-gray-300 border border-white/10 rounded-full px-2.5 py-0.5">
                    {workModeLabels[jobData.workMode] ?? jobData.workMode}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
                {jobData.title}
              </h1>

              {jobData.excerpt && (
                <p className="text-lg text-gray-400 mb-6">{jobData.excerpt}</p>
              )}

              <Button
                asChild
                className="bg-[#F47F21] hover:bg-[#E06F1A] text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg transition-colors"
              >
                <a href={`mailto:jobs1@iagentsflow.com`} target="_blank" rel="noopener noreferrer">
                  Apply For This Job
                </a>
              </Button>
            </div>

            <div className="w-full h-px bg-white/10 mb-10"></div>

            {/* Meta grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 p-6 bg-[#172135] border border-white/10 rounded-xl">
              {jobData.team && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Team</p>
                  <p className="text-white font-medium">{jobData.team}</p>
                </div>
              )}
              {jobData.location && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">{jobData.location}</p>
                </div>
              )}
              {jobData.experience && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Experience</p>
                  <p className="text-white font-medium">{jobData.experience}</p>
                </div>
              )}
              {hasSalary && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Salary</p>
                  <p className="text-white font-medium">
                    {jobData.salaryMin && jobData.salaryMax
                      ? `${currency} ${jobData.salaryMin.toLocaleString()} – ${jobData.salaryMax.toLocaleString()}`
                      : jobData.salaryMin
                        ? `From ${currency} ${jobData.salaryMin.toLocaleString()}`
                        : `Up to ${currency} ${jobData.salaryMax?.toLocaleString()}`}
                  </p>
                </div>
              )}
              {postedDate && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Posted</p>
                  <p className="text-white font-medium">{postedDate}</p>
                </div>
              )}
              {validDate && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Apply by</p>
                  <p className="text-white font-medium">{validDate}</p>
                </div>
              )}
            </div>

            {/* Skills */}
            {jobData.skills && jobData.skills.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-display font-semibold text-white mb-3">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {jobData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-[#0080FF]/10 text-[#0080FF] border border-[#0080FF]/20 rounded-md px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {jobData.description && jobData.description.length > 0 && (
              <div className="prose prose-invert max-w-none mb-12">
                <div className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  <PortableText blocks={jobData.description as PortableTextBlock[]} />
                </div>
              </div>
            )}

            {/* Apply CTA */}
            <div className="border-t border-white/10 pt-10 text-center">
              <p className="text-gray-400 mb-4">Ready to apply? We&apos;d love to hear from you.</p>
              <Button
                asChild
                className="bg-[#F47F21] hover:bg-[#E06F1A] text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg transition-colors"
              >
                <a href={`mailto:jobs1@iagentsflow.com`} target="_blank" rel="noopener noreferrer">
                  Apply For This Job
                </a>
              </Button>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
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
