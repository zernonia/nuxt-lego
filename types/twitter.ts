interface TweetEditControl {
  edit_tweet_ids: string[];
  editable_until_msecs: string;
  is_edit_eligible: boolean;
  edits_remaining: string;
}

type Indices = [number, number];

interface HashtagEntity {
  indices: Indices;
  text: string;
}

interface UserMentionEntity {
  id_str: string;
  indices: Indices;
  name: string;
  screen_name: string;
}

interface MediaEntity {
  display_url: string;
  expanded_url: string;
  indices: Indices;
  url: string;
}

interface UrlEntity {
  display_url: string;
  expanded_url: string;
  indices: Indices;
  url: string;
}

interface SymbolEntity {
  indices: Indices;
  text: string;
}

interface TweetEntities {
  hashtags: HashtagEntity[];
  urls: UrlEntity[];
  user_mentions: UserMentionEntity[];
  symbols: SymbolEntity[];
  media?: MediaEntity[];
}

type RGB = {
  red: number;
  green: number;
  blue: number;
};

type Rect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type Size = {
  h: number;
  w: number;
  resize: string;
};

interface VideoInfo {
  aspect_ratio: [number, number];
  variants: {
    bitrate?: number;
    content_type: "video/mp4" | "application/x-mpegURL";
    url: string;
  }[];
}

interface MediaBase {
  display_url: string;
  expanded_url: string;
  ext_media_availability: {
    status: string;
  };
  ext_media_color: {
    palette: {
      percentage: number;
      rgb: RGB;
    }[];
  };
  indices: Indices;
  media_url_https: string;
  original_info: {
    height: number;
    width: number;
    focus_rects: Rect[];
  };
  sizes: {
    large: Size;
    medium: Size;
    small: Size;
    thumb: Size;
  };
  url: string;
}

export interface MediaPhoto extends MediaBase {
  type: "photo";
  ext_alt_text?: string;
}

export interface MediaAnimatedGif extends MediaBase {
  type: "animated_gif";
  video_info: VideoInfo;
}

export interface MediaVideo extends MediaBase {
  type: "video";
  video_info: VideoInfo;
}

export type MediaDetails = MediaPhoto | MediaAnimatedGif | MediaVideo;

interface TweetUser {
  id_str: string;
  name: string;
  profile_image_url_https: string;
  screen_name: string;
  verified: boolean;
  verified_type: string;
  is_blue_verified: boolean;
}

interface TweetVideo {
  aspectRatio: [number, number];
  contentType: string;
  durationMs: number;
  mediaAvailability: {
    status: string;
  };
  poster: string;
  variants: {
    type: string;
    src: string;
  }[];
  videoId: {
    type: string;
    id: string;
  };
  viewCount: number;
}

interface TweetPhoto {
  backgroundColor: RGB;
  cropCandidates: Rect[];
  expandedUrl: string;
  url: string;
  width: number;
  height: number;
}

interface TweetBase {
  lang: string;
  created_at: string;
  display_text_range: Indices;
  entities: TweetEntities;
  id_str: string;
  text: string;
  user: TweetUser;
  edit_control: TweetEditControl;
  isEdited: boolean;
  isStaleEdit: boolean;
}

export interface Tweet extends TweetBase {
  __typename: "Tweet";
  favorite_count: number;
  mediaDetails?: MediaDetails[];
  photos?: TweetPhoto[];
  video?: TweetVideo;
  conversation_count: number;
  news_action_type: "conversation";
  quoted_tweet?: QuotedTweet;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  parent?: TweetParent;
  possibly_sensitive?: boolean;
}

interface TweetParent extends TweetBase {
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
}

interface QuotedTweet extends TweetBase {
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
  self_thread: {
    id_str: string;
  };
}
