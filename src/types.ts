export interface ThreadsResponse {
	has_more: boolean;
	threads: Thread[];
}

export interface Thread {
	id: string;
	type: number;
	last_message_id: string;
	flags: number;
	guild_id: string;
	name: string;
	parent_id: string;
	rate_limit_per_user: number;
	bitrate: number;
	user_limit: number;
	rtc_region: null;
	owner_id: string;
	thread_metadata: {
		archived: boolean;
		archive_timestamp: Date;
		auto_archive_duration: number;
		locked: boolean;
		create_timestamp: Date;
	};
	message_count: number;
	member_count: number;
	total_message_sent: number;
	applied_tags: string[];
}

export interface Message {
	type: number;
	content: string;
	mentions: [];
	mention_roles: [];
	attachments: [];
	embeds: [];
	timestamp: Date;
	edited_timestamp: Date | null;
	flags: 0;
	components: [];
	id: string;
	channel_id: string;
	author: {
		id: string;
		username: string;
		avatar: string;
		discriminator: number;
		public_flags: number;
		flags: number;
		banner: string | null;
		accent_color: number | null;
		global_name: string;
	};
	pinned: boolean;
	mention_everyone: boolean;
	tts: boolean;
	position: boolean;
}