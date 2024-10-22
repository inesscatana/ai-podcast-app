import { v } from 'convex/values'

import { mutation } from './_generated/server'

// this mutation is required to generate the url after uploading the file to the storage.
export const getUrl = mutation({
	args: {
		storageId: v.id('_storage'),
	},
	handler: async (ctx, args) => {
		return await ctx.storage.getUrl(args.storageId)
	},
})
