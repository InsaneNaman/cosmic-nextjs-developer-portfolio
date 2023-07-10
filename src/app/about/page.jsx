import Image from 'next/image'
import { PageMeta } from '@/components/Meta'
import { getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import { sanitize } from 'isomorphic-dompurify'

async function getData() {
  const pageData = (await getPageBySlug('about-page', 'content,metadata')) || []
  return {
    pageData,
  }
}

const AboutPage = async () => {
  const data = await getData()
  const { metadata, content } = data.pageData ?? {}

  return (
    <>
      <PageMeta
        title={metadata?.meta_title}
        description={metadata?.meta_description}
      />
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">
          {metadata?.heading}
        </h1>
        <div className="flex flex-col md:flex-row-reverse justify-between">
          {metadata?.image && (
            <div className="relative max-w-[200px] md:max-w-sm mb-12">
              <Image
                src={metadata?.image?.imgix_url}
                alt="Developer avatar"
                quality={60}
                width={270}
                height={270}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="w-fit"
              />
            </div>
          )}
          <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-12">
            <div
              className="text-fore-primary mb-8 space-y-4"
              dangerouslySetInnerHTML={{
                __html: sanitize(content),
              }}
            />
            <Socials
              resume={metadata?.socials.metadata.resume.url}
              email={metadata?.socials.metadata.email}
              github={metadata?.socials.metadata.github}
              linkedin={metadata?.socials.metadata.linkedin}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 60
export default AboutPage
