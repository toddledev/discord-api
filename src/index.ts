import { getNewData } from './discord-api'
import { saveData } from '../supabase/updateData'

export default {
	// The scheduled handler is invoked at the interval set in our wrangler.toml's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		const { newTopics, existingTopics, newMessages, newUsers } =
			await getNewData(env)

		await saveData(newTopics, existingTopics, newMessages, newUsers, env)
	},

	async fetch(request, env, ctx): Promise<Response> {
		return new Response()
	},
} satisfies ExportedHandler<Env>
