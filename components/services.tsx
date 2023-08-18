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

export default function Services() {
    return (
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
    )
}
