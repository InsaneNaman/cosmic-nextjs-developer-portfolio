import Socials from '@/components/Socials'
import DeveloperAvatar from '@/components/DeveloperAvatar'

const IntroSection = ({ heading, subHeading, avatar, socials }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-4 max-w-lg">
          {subHeading || 'This portfolio template is powered by Cosmic.'}
        </h2>
        <Socials
          resume={socials?.metadata.resume.url}
          email={socials?.metadata.email}
          github={socials?.metadata.github}
          linkedin={socials?.metadata.linkedin}
        />
      </div>
      {avatar && (
        <div className="w-[80px] h-[80px] lg:w-[186px] lg:h-[186px]">
          <DeveloperAvatar src={avatar} />
        </div>
      )}
    </section>
  )
}

export default IntroSection
