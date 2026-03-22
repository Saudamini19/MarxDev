import { Check, X } from 'lucide-react'

const allFeatures = [
    'Manual & AI Drawing',
    'Model Validation',
    'Cost Modeling',
    'Voice Commands',
    'Confluence/GitHub Integration',
    'On-Call Support',
]

const plans = [
    {
        name: 'Developer Plan',
        price: '€0',
        prompts: '15',
        includedFeatures: ['Manual & AI Drawing', 'Model Validation'],
        exports: ['PNG', 'JSON'],
        highlighted: false,
    },
    {
        name: 'Professional Plan',
        price: '€14.99',
        prompts: '75',
        includedFeatures: ['Manual & AI Drawing', 'Model Validation', 'Cost Modeling'],
        exports: ['PNG', 'JSON', 'CSV', 'XML', 'TURTLE', 'JSON-LD'],
        highlighted: false,
    },
    {
        name: 'Enterprise Plan',
        price: '€Custom',
        prompts: 'Unlimited',
        includedFeatures: allFeatures,
        exports: ['PNG', 'JSON', 'CSV', 'XML', 'TURTLE', 'JSON-LD'],
        highlighted: false,
    },
]

export default function Pricing() {
    return (
        <div
            id="pricing"
            className="relative py-16 md:py-32"
            style={{ background: 'linear-gradient(to bottom, #000101 0%, #034851 50%, #000000 100%)', paddingLeft: 'clamp(41px, 10.5vw, 151px)', paddingRight: 'clamp(41px, 10.5vw, 151px)' }}
        >
            <div className="w-full max-w-7xl mx-auto">
                <div>
                    <h2 className="font-space-grotesk text-left text-5xl font-extralight leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-white">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="font-manrope text-white/70 mt-4 text-lg">
                        Choose the plan that fits your architecture design needs. Interested?{' '}
                        <a href="#contact" className="underline hover:text-white transition-colors">Reach out to us</a>.
                    </p>
                </div>

                <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="relative flex flex-col rounded-2xl border border-white/10 p-8 bg-white/5 backdrop-blur-sm"
                        >

                            <h3 className="font-space-grotesk text-xl font-semibold text-white">{plan.name}</h3>

                            <div className="mt-4 flex items-baseline gap-1">
                                <span className="font-space-grotesk text-5xl font-bold tracking-tight text-white">{plan.price}</span>
                                <span className="font-manrope text-white/60">/month</span>
                            </div>

                            <div className="mt-6 rounded-lg bg-white/10 px-4 py-2 text-sm text-white font-manrope">
                                <span className="font-bold">{plan.prompts}</span> AI Prompts/day
                            </div>

                            <ul className="mt-6 space-y-3 flex-1 font-manrope">
                                {allFeatures.map((feature, i) => {
                                    const included = plan.includedFeatures.includes(feature)
                                    return (
                                        <li key={i} className="flex items-center gap-2">
                                            {included ? (
                                                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#04b8a6]/20">
                                                    <Check className="h-3.5 w-3.5 text-[#04b8a6]" strokeWidth={3} />
                                                </span>
                                            ) : (
                                                <span className="flex h-5 w-5 items-center justify-center">
                                                    <X className="h-4 w-4 text-red-400/70" strokeWidth={2.5} />
                                                </span>
                                            )}
                                            <span className={included ? 'text-white' : 'text-white/40'}>
                                                {feature}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="mt-8">
                                <p className="font-manrope mb-2 text-xs font-semibold uppercase tracking-wider text-white/50">
                                    Supported Exports:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {plan.exports.map((exp, i) => (
                                        <span
                                            key={i}
                                            className="font-manrope rounded border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                                        >
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
