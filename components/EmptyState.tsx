import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

import { EmptyStateProps } from '@/types'

const EmptyState = ({
	title,
	search,
	buttonLink,
	buttonText,
}: EmptyStateProps) => {
	return (
		<section className="flex-center size-full flex-col gap-3">
			<div style={{ width: '250px', height: '250px', position: 'relative' }}>
				<Image
					src="/icons/emptyState.svg"
					alt="Empty state"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className="flex-center w-full max-w-[254px] flex-col gap-3">
				<h1 className="text-16 text-center font-medium text-white-1">
					{title}
				</h1>
				{search && (
					<p className="text-16 text-center font-medium text-white-2">
						Try adjusting your search to find what you are looking for
					</p>
				)}
				{buttonLink && (
					<Button className="bg-orange-1">
						<Link href={buttonLink} className="gap-1 flex">
							<div
								style={{ width: '20px', height: '20px', position: 'relative' }}
							>
								<Image
									src="/icons/discover.svg"
									alt="Discover icon"
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>

							<h1 className="text-16 font-extrabold text-white-1">
								{buttonText}
							</h1>
						</Link>
					</Button>
				)}
			</div>
		</section>
	)
}

export default EmptyState
