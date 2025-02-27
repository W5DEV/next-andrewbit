import {
    BugAntIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    DocumentTextIcon,
    EnvelopeIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'
import Navigation from "@/app/components/Navigation";

export default function Home() {
    const features = [
        {
            name: 'Managed IT Services',
            description: 'Level billing. Predictable costs.',
            icon: WrenchScrewdriverIcon,
        },
        {
            name: 'Data Backups',
            description: 'Keep your data safe with industry-leading reliability.',
            icon: ServerIcon,
        },
        {
            name: 'Antivirus',
            description: 'Protect endpoints against emerging threats.',
            icon: BugAntIcon,
        },
        {
            name: 'Remote Management & Monitoring',
            description: 'Real-time monitoring to prevent issues and minimize critical-hour downtime.',
            icon: ComputerDesktopIcon,
        },
        {
            name: 'Patch Management',
            description: 'Keep all devices securely patched and up-to-date.',
            icon: CpuChipIcon,
        },
        {
            name: 'Security Awareness Training',
            description: 'Reduces data-loss liability and costly breaches with enhanced user-awareness.',
            icon: ShieldCheckIcon,
        },
        {
            name: 'Office 365 Services',
            description: 'Robust cloud infrastructure as a service.',
            icon: DocumentTextIcon,
        },
        {
            name: 'Email Encryption',
            description: 'Protect sensitive email content in transit and at rest.',
            icon: LockClosedIcon,
        },
        {
            name: 'Spam Filtering',
            description: 'Eliminate threats, reduce spam and increase productivity.',
            icon: EnvelopeIcon,
        },
    ]
  return (
      <>
      <div className="bg-gray-900 h-full overflow-hidden">
          <Navigation />
        <div className="relative isolate pt-8">
          <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
          <div className="pt-0 sm:pb-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  AndrewB.IT
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                  Honest IT. Simplified.
                </p>
              </div>
               <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-white">
                                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="h-96 overflow-hidden w-full rounded-md mt-16 sm:mt-24 ring-1 ring-white/10 object-cover flex justify-center items-center">
                    <img
                        src="https://images.unsplash.com/photo-1564457461758-8ff96e439e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                        alt="App screenshot"
                        className="object-cover h-full w-full bg-white/5 shadow-2xl opacity-60"
                    />
                </div>
            </div>
          </div>
          <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
          </div>
        </div>
      </div>
        <footer className="text-gray-600 text-xs h-auto p-2 bg-gray-900 z-50 w-full flex flex-row justify-center items-center">
            <span>
                &copy; 2023 Great Idea Media | All Rights Reserved.
            </span>
        </footer>
      </>
  )
}
