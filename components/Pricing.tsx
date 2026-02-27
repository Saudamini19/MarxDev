import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Pricing() {
    const plans = [
        {
            name: 'Free',
            price: '€0 / mo',
            desc: '25 Prompts/day',
            features: ['Manual & AI Drawing', 'Model Validation'],
            buttonVariant: 'neutral'
        },
        {
            name: 'Standard',
            price: '€9.99 / mo',
            desc: '500 Prompts/day',
            features: [
                'Everything in Free Plan',
                'Operational Cost Modeling',

            ],
            buttonVariant: 'default'
        },
        {
            name: 'Enterprise',
            price: '€29.99 / mo',
            desc: 'Unlimited Prompts/day',
            features: ['Everything in Standard Plan', 'Voice Commands', 'Jira/GitHub Integration', 'Dedicated Support'],
            buttonVariant: 'neutral'
        }
    ]

    return (
        <div className="bg-muted relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Transparent plans that scale with your business
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                        Are you not sure which one is right for you? Contact us and we will help you find the perfect plan for your business.
                    </p>
                </div>

                {/* Horizontal cards container */}
                <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <CardHeader className="p-8">
                                <CardTitle className="font-medium">{plan.name}</CardTitle>
                                <span className="mb-0.5 mt-2 block text-2xl font-semibold">{plan.price}</span>
                                <CardDescription className="text-sm">{plan.desc}</CardDescription>
                            </CardHeader>
                            <div className="border-y px-8 py-4">
                                <Button
                                    asChild
                                    className="w-full"
                                    variant={plan.buttonVariant as 'default' | 'neutral'}
                                >
                                    <Link href="#">Get Started</Link>
                                </Button>
                            </div>
                            <ul role="list" className="space-y-3 p-8">
                                {plan.features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="text-primary size-3" strokeWidth={3.5} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}