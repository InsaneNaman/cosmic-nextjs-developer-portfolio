import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import { draftMode } from 'next/headers'

async function getData() {
  const { isEnabled } = draftMode()
  const allPosts = (await getAllPosts(isEnabled, 'posts', 3)) || []
  const allWorks = (await getAllPosts(isEnabled, 'works', 3)) || []
  const pageData = await getPageBySlug('home-page', 'metadata')
  return {
    allPosts,
    allWorks,
    pageData,
  }
}

const HomePage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allWorks = data.allWorks
  const { metadata } = data.pageData ?? {}

  return (
    <>
      <PageMeta
        title={metadata?.meta_title}
        description={metadata?.meta_description}
      />
      <IntroSection
        avatar={metadata?.avatar?.imgix_url}
        heading={metadata?.heading}
        subHeading={metadata?.sub_heading}
        socials={metadata?.socials}
      />
      <AboutMeSection bodyText={metadata?.about} />
      <ToolboxSection />
      <WorksSection posts={allWorks} />
      <PostsSection posts={allPosts} />
      <ContactSection
        heading={metadata?.contact_heading}
        bodyText={metadata?.contact_text}
        email={metadata?.socials.metadata.email}
      />
    </>
  )
}
export const revalidate = 60
export default HomePage
