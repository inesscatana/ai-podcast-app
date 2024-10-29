'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

export function useEnsureUserExists() {
	const { user, isSignedIn } = useUser()
	const addUserIfNotExists = useMutation(api.users.addUserIfNotExists)

	useEffect(() => {
		async function ensureUserExists() {
			if (isSignedIn && user) {
				console.log('Checking if user exists in Convex')
				await addUserIfNotExists({
					email: user.primaryEmailAddress?.emailAddress || '',
					name: user.fullName || '',
					imageUrl: user.imageUrl || '',
					clerkId: user.id,
				})
				console.log('User check/insert completed')
			}
		}
		ensureUserExists()
	}, [isSignedIn, user, addUserIfNotExists])
}
