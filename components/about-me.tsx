import Image from 'next/image'

export function AboutMe() {
  return (
    <section id="about">
      <div className="container mx-auto md:min-h-[calc(100vh-4rem)]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-6 text-3xl font-bold sm:text-4xl">
              About Me
            </h2>
            <div className="from-primary to-secondary mx-auto mb-8 h-1 w-20 bg-gradient-to-r" />
          </div>

          <div className="grid items-center justify-between gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer with over 5 years of
                experience building web applications that make a difference. I
                love working with modern technologies and creating solutions
                that are both functional and beautiful.
              </p>

              <p className="text-foreground/80 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h3 className="font-heading mb-2 text-lg font-semibold">
                    Frontend
                  </h3>
                  <p className="text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-lg font-semibold">
                    Backend
                  </h3>
                  <p className="text-muted-foreground">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="from-primary/10 to-secondary/10 aspect-square rounded-2xl bg-gradient-to-br p-8">
                <Image
                  width={1000}
                  height={1000}
                  src="/developer-workspace.png"
                  alt="Developer workspace"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
