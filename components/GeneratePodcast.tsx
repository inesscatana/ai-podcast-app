import React, { useState } from 'react'

import { GeneratePodcastProps } from '@/types'

import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'

const useGeneratePodcast = ({
	setAudio,
	voiceType,
	voicePrompt,
	setAudioStorageId,
}: GeneratePodcastProps) => {
	const [isGenerating, setIsGenerating] = useState(false)

	const generatePodcast = async () => {
		setIsGenerating(true)
		setAudio('')

		if (!voicePrompt) {
			return setIsGenerating(false)
		}

		try {
			// const response = await fetch('/api/generate-podcast', {
			//   method: 'POST',
			//   headers: {
			//     'Content-Type': 'application/json',
			//   },
			//   body: JSON.stringify({
			//     voiceType,
			//     prompt: voicePrompt,
			//   }),
			// })

			// if (!response.ok) {
			//   throw new Error('Error generating podcast audio')
			// }

			const audioUrl = await response.text()
			setAudio(audioUrl)
			setAudioStorageId(null)
			setIsGenerating(false)
		} catch (error) {
			console.error('Error generating podcast audio:', error)
			setIsGenerating(false)
		}
	}

	return {
		isGenerating: false,
		generatePodcast,
	}
}

const GeneratePodcast = (props: GeneratePodcastProps) => {
	const { isGenerating, generatePodcast } = useGeneratePodcast(props)

	return (
		<div>
			<div className="flex flex-col gap-2.5">
				<Label className="text-16 font-bold text-white-1">
					AI Prompt to generate Podcast
				</Label>
				<Textarea
					className="input-class font-light focus-visible:ring-offset-orange-1"
					placeholder="Provide text to generate audio"
					rows={5}
					value={props.voicePrompt}
					onChange={(e) => props.setVoicePrompt(e.target.value)}
				/>
			</div>
			<div className="mt-5 w-full max-w-[200px]">
				<Button
					type="submit"
					className="text-16 bg-orange-1 py-4 font-bold text-white-1"
					onClick={generatePodcast}
				>
					{isGenerating ? (
						<>
							Generating
							<Loader size={20} className="animate-spin ml-2" />
						</>
					) : (
						'Generate'
					)}
				</Button>
			</div>
			{props.audio && (
				<audio
					controls
					src={props.audio}
					autoPlay
					className="mt-5"
					onLoadedMetadata={(e) =>
						props.setAudioDuration(e.currentTarget.duration)
					}
				/>
			)}
		</div>
	)
}

export default GeneratePodcast
