(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9670)}])},3108:function(e,n,t){"use strict";var i=t(5893),r=t(1664),a=t.n(r);n.Z=function(e){var n=e.genre;return(0,i.jsx)(a(),{href:"/genre/".concat(n),passHref:!0,children:(0,i.jsx)("a",{className:"transform rounded bg-black p-1 text-xs text-white transition duration-300 ease-out hover:scale-105 sm:text-sm",children:n})})}},2730:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(5893),r=t(1664),a=t.n(r),o=t(1163),s=t(3737),E=function(e){var n=e.className;return(0,i.jsxs)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n,children:[(0,i.jsx)("path",{d:"M257.498 293.782L277.084 389.793H419.004L391.023 293.782H257.498Z",fill:"#E50914"}),(0,i.jsx)("path",{d:"M97.7692 289.197L76.673 389.793H272.903L253.317 293.782L97.7692 289.197Z",fill:"#E50914"}),(0,i.jsx)("path",{d:"M189.869 0H313.317L123.448 499.725H0L189.869 0Z",fill:"#B1060F"}),(0,i.jsx)("path",{d:"M317.467 0H189.869L384.402 512H512L317.467 0Z",fill:"#E50914"}),(0,i.jsx)("path",{d:"M248.226 293.526L267.987 389.56H295.529L291.137 293.526H248.226Z",fill:"#E50914"})]})},c=function(){var e=(0,o.useRouter)();return(0,i.jsxs)("header",{className:"sticky top-0 z-[51] flex h-12 w-full items-center bg-gray-900 shadow-md",style:{background:"transparent"},children:[(0,i.jsx)(a(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(E,{className:"ml-4 h-7 w-7 cursor-pointer sm:ml-6"})})}),(0,i.jsxs)("div",{className:"ml-4 flex items-center rounded bg-gray-50 py-[1px] px-2 sm:ml-6",children:[(0,i.jsx)(s.Z,{className:"h-4 w-4"}),(0,i.jsx)("input",{className:"w-44 bg-transparent p-1 text-sm text-black placeholder-gray-400 outline-none sm:w-56 md:w-64 lg:w-72",placeholder:"Search for Anime to watch",onKeyPress:function(n){"Enter"===n.key&&e.push("/search?keyword=".concat(n.currentTarget.value))}})]})]})}},2925:function(e,n,t){"use strict";var i=t(5893);t(7294);n.Z=function(e){var n=e.icon,t=e.text,r=e.className,a=n;return(0,i.jsxs)("div",{className:"flex items-center space-x-1 ".concat(r||""),children:[(0,i.jsx)(a,{className:"h-4 w-4"}),(0,i.jsx)("p",{className:"text-xs sm:text-sm",children:t})]})}},4737:function(e,n,t){"use strict";var i=t(5893),r=t(7294),a=t(5675),o=t.n(a),s=t(1664),E=t.n(s),c=t(1163),u=t(5186),A=t(4523),d=t(6111),D=t(3108),l=t(2925),I=t(361),T=t(3305);n.Z=function(e){var n,t=e.anime,a=(0,c.useRouter)();return(0,r.useEffect)((function(){t.bannerImage||I.Z.finish()}),[t.bannerImage]),(0,i.jsxs)("div",{className:"relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]",children:[t.bannerImage&&(0,i.jsx)(o(),{priority:!0,src:t.bannerImage,alt:"Banner for ".concat(t.title.english||t.title.romaji),layout:"fill",objectFit:"cover",className:"opacity-60",onLoadingComplete:I.Z.finish}),(0,i.jsxs)("div",{className:"absolute ml-4 mt-4 space-y-2 text-white sm:ml-8 sm:mt-6 md:space-y-3 lg:mt-8 xl:mt-10 2xl:mt-12",children:[(0,i.jsx)("p",{className:"text-xl font-extrabold line-clamp-1 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",children:t.title.romaji||t.title.english}),(0,i.jsx)("p",{className:"text-sm font-normal text-gray-300 line-clamp-1 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",children:null!==(n=t.title.english)&&void 0!==n?n:t.title.romaji}),(0,i.jsxs)("div",{className:"flex space-x-2",children:[(0,i.jsx)(l.Z,{icon:d.Z,text:t.format}),(0,i.jsx)(l.Z,{icon:u.Z,text:"".concat(t.duration," Min/Ep")}),(0,i.jsx)(l.Z,{icon:A.Z,text:"".concat(t.meanScore,"%")})]}),(0,i.jsx)("div",{className:"mr-2 flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-3 md:gap-x-4",children:t.genres.map((function(e){return(0,i.jsx)(D.Z,{genre:e},e)}))}),(0,i.jsx)("p",{className:"hidden max-w-3xl md:block md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5 2xl:line-clamp-6",children:(0,T.Vt)(t.description)}),(0,i.jsx)(E(),{href:"/".concat("/"===a.route?"anime":"watch","/").concat(t.id),passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsxs)("button",{className:"mt-2 flex transform items-center rounded-lg bg-[#C3073F] px-2 py-1 text-xs text-white transition duration-300 ease-in active:scale-90 sm:text-sm md:text-base",children:[(0,i.jsx)(d.Z,{className:"mr-1 w-5"}),"/"===a.route?"Read More":"Watch Now"]})})})]})]})}},3998:function(e,n,t){"use strict";var i=t(5893),r=t(5675),a=t.n(r),o=t(1664),s=t.n(o),E=t(2426);n.Z=function(e){var n=e.anime,t=n.title.romaji||n.title.english;return(0,i.jsx)(s(),{href:"/anime/".concat(n.id),passHref:!0,children:(0,i.jsx)("a",{className:"w-46 transform p-2 transition duration-300 ease-out hover:scale-105 sm:w-56",style:{margin:"0"},children:(0,i.jsxs)("div",{className:"aspect-w-7 aspect-h-9 relative w-40 sm:w-52",style:{position:"relative",textShadow:"1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",height:"60vh"},children:[(0,i.jsx)(a(),{alt:"Cover Image",src:n.coverImage.large||n.coverImage.medium,layout:"fill",objectFit:"cover",objectPosition:"center",className:"rounded-md",placeholder:"blur",style:{borderRadius:"0"},blurDataURL:"data:image/svg+xml;base64,".concat((0,E.YE)(n.coverImage.color))}),(0,i.jsx)("div",{className:"cardTitle",style:{position:"absolute",fontSize:"1.2vw",display:"flex"},children:(0,i.jsx)("p",{className:"mt-2 h-9 text-sm font-bold text-white line-clamp-2",style:{alignSelf:"flex-end",marginLeft:"2%",marginBottom:"1%"},children:t})})]})})})}},9759:function(e,n,t){"use strict";var i=t(5893),r=t(7294),a=t(3998);n.Z=function(e){var n=e.title,t=e.animeList,o=(0,r.useRef)(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"mt-4 ml-3 text-base font-semibold text-white sm:ml-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",style:{fontSize:"1.6vw"},children:n}),(0,i.jsx)("div",{tabIndex:0,className:"mt-2 mb-8 ml-2 flex space-x-4 overflow-y-hidden overflow-x-scroll p-1 outline-none scrollbar-hide sm:ml-6",ref:o,onMouseEnter:function(){return o.current.focus()},children:t.map((function(e){return(0,i.jsx)(a.Z,{anime:e},e.id)}))})]})}},8442:function(e,n,t){"use strict";t.d(n,{O8:function(){return a},TS:function(){return i},gm:function(){return r}});var i="https://graphql.anilist.co",r="https://kitsu.io/api/graphql",a=/(gogocdn\.stream)|(manifest\.prod\.boltdns\.net)/},9670:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return wn},default:function(){return Gn}});var i,r,a,o,s,E,c,u,A,d,D,l,I,T,S,m,f,R,p,C,N,_,g,P,O,M,L,h,x,v,y,U,w,G,b,j,H,V,F,Y,$=t(5893),B=t(7294),Z=t(4737),q=t(9759),k=t(2730),W=t(361),K=t(4051),J=t.n(K),z=t(8687),Q=t(210);function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){X(e,n,t[n])}))}return e}function ne(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function te(){var e=ne(["\n  fragment AnimeBanner on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    bannerImage\n    description\n    format\n    duration\n    meanScore\n    genres\n    season\n    startDate {\n      year\n    }\n  }\n"]);return te=function(){return e},e}function ie(){var e=ne(["\n  fragment AnimeInfo on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      color\n      medium\n      large\n    }\n    format\n    duration\n    meanScore\n    nextAiringEpisode {\n      airingAt\n      timeUntilAiring\n      episode\n    }\n  }\n"]);return ie=function(){return e},e}function re(){var e=ne(["\n  query getAnimeBanner($id: Int) {\n    Media(id: $id, type: ANIME) {\n      ...AnimeBanner\n    }\n  }\n  ","\n"]);return re=function(){return e},e}function ae(){var e=ne(["\n  query getAnimeInfo($id: Int) {\n    Media(id: $id, type: ANIME) {\n      ...AnimeInfo\n    }\n  }\n  ","\n"]);return ae=function(){return e},e}function oe(){var e=ne(["\n  query getAnimeByIds($perPage: Int, $page: Int, $ids: [Int]) {\n    Page(perPage: $perPage, page: $page) {\n      media(id_in: $ids) {\n        ...AnimeInfo\n      }\n    }\n  }\n  ","\n"]);return oe=function(){return e},e}function se(){var e=ne(["\n  query getAnimeTitle($id: Int) {\n    Media(id: $id, type: ANIME) {\n      title {\n        romaji\n        english\n      }\n    }\n  }\n"]);return se=function(){return e},e}function Ee(){var e=ne(["\n  query getPopularBanner($seasonYear: Int) {\n    Media(type: ANIME, sort: POPULARITY_DESC, seasonYear: $seasonYear) {\n      ...AnimeBanner\n    }\n  }\n  ","\n"]);return Ee=function(){return e},e}function ce(){var e=ne(["\n  query searchAnime($page: Int, $perPage: Int, $keyword: String) {\n    Page(perPage: $perPage, page: $page) {\n      media(type: ANIME, search: $keyword) {\n        ...AnimeInfo\n      }\n    }\n  }\n  ","\n"]);return ce=function(){return e},e}function ue(){var e=ne(["\n  query searchGenre($page: Int, $perPage: Int, $genre: String) {\n    Page(perPage: $perPage, page: $page) {\n      media(type: ANIME, genre: $genre, sort: POPULARITY_DESC) {\n        ...AnimeInfo\n      }\n    }\n  }\n  ","\n"]);return ue=function(){return e},e}function Ae(){var e=ne(["\n  query getList($perPage: Int, $page: Int, $sort: [MediaSort]) {\n    Page(perPage: $perPage, page: $page) {\n      media(sort: $sort, type: ANIME) {\n        ...AnimeInfo\n      }\n    }\n  }\n  ","\n"]);return Ae=function(){return e},e}function de(){var e=ne(["\n  query indexPage($perPage: Int, $page: Int, $seasonYear: Int) {\n    banner: Media(type: ANIME, sort: POPULARITY_DESC, seasonYear: $seasonYear) {\n      ...AnimeBanner\n    }\n    trending: Page(perPage: $perPage, page: $page) {\n      media(sort: TRENDING_DESC, type: ANIME) {\n        ...AnimeInfo\n      }\n    }\n    popular: Page(perPage: $perPage, page: $page) {\n      media(sort: POPULARITY_DESC, type: ANIME) {\n        ...AnimeInfo\n      }\n    }\n    topRated: Page(perPage: $perPage, page: $page) {\n      media(sort: SCORE_DESC, type: ANIME) {\n        ...AnimeInfo\n      }\n    }\n  }\n  ","\n  ","\n"]);return de=function(){return e},e}function De(){var e=ne(["\n  query animePage($id: Int, $perPage: Int) {\n    Media(id: $id, type: ANIME) {\n      status\n      ...AnimeInfo\n      ...AnimeBanner\n    }\n    recommended: Page(perPage: $perPage) {\n      recommendations(mediaId: $id, sort: RATING_DESC) {\n        mediaRecommendation {\n          ...AnimeInfo\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return De=function(){return e},e}function le(){var e=ne(["\n  query watchPage($id: Int, $perPage: Int) {\n    anime: Media(id: $id) {\n      ...AnimeBanner\n      ...AnimeInfo\n    }\n    recommended: Page(perPage: $perPage) {\n      recommendations(mediaId: $id, sort: RATING_DESC) {\n        mediaRecommendation {\n          ...AnimeBanner\n          ...AnimeInfo\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return le=function(){return e},e}!function(e){e.Id="ID",e.IdDesc="ID_DESC",e.Pinned="PINNED"}(i||(i={})),function(e){e.AnimeList="ANIME_LIST",e.MangaList="MANGA_LIST",e.MediaList="MEDIA_LIST",e.Message="MESSAGE",e.Text="TEXT"}(r||(r={})),function(e){e.Episode="EPISODE",e.EpisodeDesc="EPISODE_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.Time="TIME",e.TimeDesc="TIME_DESC"}(a||(a={})),function(e){e.Background="BACKGROUND",e.Main="MAIN",e.Supporting="SUPPORTING"}(o||(o={})),function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Relevance="RELEVANCE",e.Role="ROLE",e.RoleDesc="ROLE_DESC",e.SearchMatch="SEARCH_MATCH"}(s||(s={})),function(e){e.Anime="ANIME",e.Manga="MANGA",e.Staff="STAFF"}(E||(E={})),function(e){e.Info="INFO",e.Social="SOCIAL",e.Streaming="STREAMING"}(c||(c={})),function(e){e.Activity="ACTIVITY",e.ActivityReply="ACTIVITY_REPLY",e.Thread="THREAD",e.ThreadComment="THREAD_COMMENT"}(u||(u={})),function(e){e.Manga="MANGA",e.Movie="MOVIE",e.Music="MUSIC",e.Novel="NOVEL",e.Ona="ONA",e.OneShot="ONE_SHOT",e.Ova="OVA",e.Special="SPECIAL",e.Tv="TV",e.TvShort="TV_SHORT"}(A||(A={})),function(e){e.AddedTime="ADDED_TIME",e.AddedTimeDesc="ADDED_TIME_DESC",e.FinishedOn="FINISHED_ON",e.FinishedOnDesc="FINISHED_ON_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.MediaPopularity="MEDIA_POPULARITY",e.MediaPopularityDesc="MEDIA_POPULARITY_DESC",e.MediaTitleEnglish="MEDIA_TITLE_ENGLISH",e.MediaTitleEnglishDesc="MEDIA_TITLE_ENGLISH_DESC",e.MediaTitleNative="MEDIA_TITLE_NATIVE",e.MediaTitleNativeDesc="MEDIA_TITLE_NATIVE_DESC",e.MediaTitleRomaji="MEDIA_TITLE_ROMAJI",e.MediaTitleRomajiDesc="MEDIA_TITLE_ROMAJI_DESC",e.Priority="PRIORITY",e.PriorityDesc="PRIORITY_DESC",e.Progress="PROGRESS",e.ProgressDesc="PROGRESS_DESC",e.ProgressVolumes="PROGRESS_VOLUMES",e.ProgressVolumesDesc="PROGRESS_VOLUMES_DESC",e.Repeat="REPEAT",e.RepeatDesc="REPEAT_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.StartedOn="STARTED_ON",e.StartedOnDesc="STARTED_ON_DESC",e.Status="STATUS",e.StatusDesc="STATUS_DESC",e.UpdatedTime="UPDATED_TIME",e.UpdatedTimeDesc="UPDATED_TIME_DESC"}(d||(d={})),function(e){e.Completed="COMPLETED",e.Current="CURRENT",e.Dropped="DROPPED",e.Paused="PAUSED",e.Planning="PLANNING",e.Repeating="REPEATING"}(D||(D={})),function(e){e.Popular="POPULAR",e.Rated="RATED"}(l||(l={})),function(e){e.Adaptation="ADAPTATION",e.Alternative="ALTERNATIVE",e.Character="CHARACTER",e.Compilation="COMPILATION",e.Contains="CONTAINS",e.Other="OTHER",e.Parent="PARENT",e.Prequel="PREQUEL",e.Sequel="SEQUEL",e.SideStory="SIDE_STORY",e.Source="SOURCE",e.SpinOff="SPIN_OFF",e.Summary="SUMMARY"}(I||(I={})),function(e){e.Fall="FALL",e.Spring="SPRING",e.Summer="SUMMER",e.Winter="WINTER"}(T||(T={})),function(e){e.Chapters="CHAPTERS",e.ChaptersDesc="CHAPTERS_DESC",e.Duration="DURATION",e.DurationDesc="DURATION_DESC",e.EndDate="END_DATE",e.EndDateDesc="END_DATE_DESC",e.Episodes="EPISODES",e.EpisodesDesc="EPISODES_DESC",e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Format="FORMAT",e.FormatDesc="FORMAT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Popularity="POPULARITY",e.PopularityDesc="POPULARITY_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.SearchMatch="SEARCH_MATCH",e.StartDate="START_DATE",e.StartDateDesc="START_DATE_DESC",e.Status="STATUS",e.StatusDesc="STATUS_DESC",e.TitleEnglish="TITLE_ENGLISH",e.TitleEnglishDesc="TITLE_ENGLISH_DESC",e.TitleNative="TITLE_NATIVE",e.TitleNativeDesc="TITLE_NATIVE_DESC",e.TitleRomaji="TITLE_ROMAJI",e.TitleRomajiDesc="TITLE_ROMAJI_DESC",e.Trending="TRENDING",e.TrendingDesc="TRENDING_DESC",e.Type="TYPE",e.TypeDesc="TYPE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC",e.Volumes="VOLUMES",e.VolumesDesc="VOLUMES_DESC"}(S||(S={})),function(e){e.Anime="ANIME",e.Comic="COMIC",e.Doujinshi="DOUJINSHI",e.Game="GAME",e.LightNovel="LIGHT_NOVEL",e.LiveAction="LIVE_ACTION",e.Manga="MANGA",e.MultimediaProject="MULTIMEDIA_PROJECT",e.Novel="NOVEL",e.Original="ORIGINAL",e.Other="OTHER",e.PictureBook="PICTURE_BOOK",e.VideoGame="VIDEO_GAME",e.VisualNovel="VISUAL_NOVEL",e.WebNovel="WEB_NOVEL"}(m||(m={})),function(e){e.Cancelled="CANCELLED",e.Finished="FINISHED",e.Hiatus="HIATUS",e.NotYetReleased="NOT_YET_RELEASED",e.Releasing="RELEASING"}(f||(f={})),function(e){e.Date="DATE",e.DateDesc="DATE_DESC",e.Episode="EPISODE",e.EpisodeDesc="EPISODE_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MediaId="MEDIA_ID",e.MediaIdDesc="MEDIA_ID_DESC",e.Popularity="POPULARITY",e.PopularityDesc="POPULARITY_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.Trending="TRENDING",e.TrendingDesc="TRENDING_DESC"}(R||(R={})),function(e){e.Anime="ANIME",e.Manga="MANGA"}(p||(p={})),function(e){e.Anon="ANON",e.Ban="BAN",e.Delete="DELETE",e.Edit="EDIT",e.Expire="EXPIRE",e.Note="NOTE",e.Report="REPORT",e.Reset="RESET"}(C||(C={})),function(e){e.Admin="ADMIN",e.AnimeData="ANIME_DATA",e.Community="COMMUNITY",e.Developer="DEVELOPER",e.DiscordCommunity="DISCORD_COMMUNITY",e.LeadAnimeData="LEAD_ANIME_DATA",e.LeadCommunity="LEAD_COMMUNITY",e.LeadDeveloper="LEAD_DEVELOPER",e.LeadMangaData="LEAD_MANGA_DATA",e.LeadSocialMedia="LEAD_SOCIAL_MEDIA",e.MangaData="MANGA_DATA",e.Retired="RETIRED",e.SocialMedia="SOCIAL_MEDIA"}(N||(N={})),function(e){e.ActivityLike="ACTIVITY_LIKE",e.ActivityMention="ACTIVITY_MENTION",e.ActivityMessage="ACTIVITY_MESSAGE",e.ActivityReply="ACTIVITY_REPLY",e.ActivityReplyLike="ACTIVITY_REPLY_LIKE",e.ActivityReplySubscribed="ACTIVITY_REPLY_SUBSCRIBED",e.Airing="AIRING",e.Following="FOLLOWING",e.MediaDataChange="MEDIA_DATA_CHANGE",e.MediaDeletion="MEDIA_DELETION",e.MediaMerge="MEDIA_MERGE",e.RelatedMediaAddition="RELATED_MEDIA_ADDITION",e.ThreadCommentLike="THREAD_COMMENT_LIKE",e.ThreadCommentMention="THREAD_COMMENT_MENTION",e.ThreadCommentReply="THREAD_COMMENT_REPLY",e.ThreadLike="THREAD_LIKE",e.ThreadSubscribed="THREAD_SUBSCRIBED"}(_||(_={})),function(e){e.NoRating="NO_RATING",e.RateDown="RATE_DOWN",e.RateUp="RATE_UP"}(g||(g={})),function(e){e.Id="ID",e.IdDesc="ID_DESC",e.Rating="RATING",e.RatingDesc="RATING_DESC"}(P||(P={})),function(e){e.DownVote="DOWN_VOTE",e.NoVote="NO_VOTE",e.UpVote="UP_VOTE"}(O||(O={})),function(e){e.CreatedAt="CREATED_AT",e.CreatedAtDesc="CREATED_AT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Rating="RATING",e.RatingDesc="RATING_DESC",e.Score="SCORE",e.ScoreDesc="SCORE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC"}(M||(M={})),function(e){e.Create="CREATE",e.Edit="EDIT"}(L||(L={})),function(e){e.Point_3="POINT_3",e.Point_5="POINT_5",e.Point_10="POINT_10",e.Point_10Decimal="POINT_10_DECIMAL",e.Point_100="POINT_100"}(h||(h={})),function(e){e.Change="CHANGE",e.ChangeDesc="CHANGE_DESC",e.Count="COUNT",e.CountDesc="COUNT_DESC",e.Date="DATE",e.DateDesc="DATE_DESC"}(x||(x={})),function(e){e.English="ENGLISH",e.French="FRENCH",e.German="GERMAN",e.Hebrew="HEBREW",e.Hungarian="HUNGARIAN",e.Italian="ITALIAN",e.Japanese="JAPANESE",e.Korean="KOREAN",e.Portuguese="PORTUGUESE",e.Spanish="SPANISH"}(v||(v={})),function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Language="LANGUAGE",e.LanguageDesc="LANGUAGE_DESC",e.Relevance="RELEVANCE",e.Role="ROLE",e.RoleDesc="ROLE_DESC",e.SearchMatch="SEARCH_MATCH"}(y||(y={})),function(e){e.Favourites="FAVOURITES",e.FavouritesDesc="FAVOURITES_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.Name="NAME",e.NameDesc="NAME_DESC",e.SearchMatch="SEARCH_MATCH"}(U||(U={})),function(e){e.Id="ID",e.IdDesc="ID_DESC"}(w||(w={})),function(e){e.Accepted="ACCEPTED",e.PartiallyAccepted="PARTIALLY_ACCEPTED",e.Pending="PENDING",e.Rejected="REJECTED"}(G||(G={})),function(e){e.Id="ID",e.IdDesc="ID_DESC"}(b||(b={})),function(e){e.CreatedAt="CREATED_AT",e.CreatedAtDesc="CREATED_AT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.IsSticky="IS_STICKY",e.RepliedAt="REPLIED_AT",e.RepliedAtDesc="REPLIED_AT_DESC",e.ReplyCount="REPLY_COUNT",e.ReplyCountDesc="REPLY_COUNT_DESC",e.SearchMatch="SEARCH_MATCH",e.Title="TITLE",e.TitleDesc="TITLE_DESC",e.UpdatedAt="UPDATED_AT",e.UpdatedAtDesc="UPDATED_AT_DESC",e.ViewCount="VIEW_COUNT",e.ViewCountDesc="VIEW_COUNT_DESC"}(j||(j={})),function(e){e.ChaptersRead="CHAPTERS_READ",e.ChaptersReadDesc="CHAPTERS_READ_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.SearchMatch="SEARCH_MATCH",e.Username="USERNAME",e.UsernameDesc="USERNAME_DESC",e.WatchedTime="WATCHED_TIME",e.WatchedTimeDesc="WATCHED_TIME_DESC"}(H||(H={})),function(e){e.Native="NATIVE",e.Romaji="ROMAJI",e.RomajiWestern="ROMAJI_WESTERN"}(V||(V={})),function(e){e.Count="COUNT",e.CountDesc="COUNT_DESC",e.Id="ID",e.IdDesc="ID_DESC",e.MeanScore="MEAN_SCORE",e.MeanScoreDesc="MEAN_SCORE_DESC",e.Progress="PROGRESS",e.ProgressDesc="PROGRESS_DESC"}(F||(F={})),function(e){e.English="ENGLISH",e.EnglishStylised="ENGLISH_STYLISED",e.Native="NATIVE",e.NativeStylised="NATIVE_STYLISED",e.Romaji="ROMAJI",e.RomajiStylised="ROMAJI_STYLISED"}(Y||(Y={}));var Ie,Te,Se,me,fe,Re,pe,Ce,Ne,_e,ge,Pe,Oe,Me,Le,he,xe,ve,ye,Ue,we,Ge,be,je,He,Ve,Fe,Ye,$e,Be,Ze,qe,ke,We,Ke,Je,ze,Qe=(0,Q.ZP)(te()),Xe=(0,Q.ZP)(ie()),en=(0,Q.ZP)(re(),Qe),nn=(0,Q.ZP)(ae(),Xe),tn=(0,Q.ZP)(oe(),Xe),rn=(0,Q.ZP)(se()),an=(0,Q.ZP)(Ee(),Qe),on=(0,Q.ZP)(ce(),Xe),sn=(0,Q.ZP)(ue(),Xe),En=(0,Q.ZP)(Ae(),Xe),cn=(0,Q.ZP)(de(),Qe,Xe),un=(0,Q.ZP)(De(),Xe,Qe),An=(0,Q.ZP)(le(),Qe,Xe),dn=function(e,n,t){return e()};function Dn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ln(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){Dn(e,n,t[n])}))}return e}function In(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function Tn(){var e=In(["\n  fragment EpisodeInfo on Episode {\n    number\n    titles {\n      canonical\n    }\n    thumbnail {\n      original {\n        url\n      }\n    }\n  }\n"]);return Tn=function(){return e},e}function Sn(){var e=In(["\n  fragment EpisodesList on Anime {\n    episodeCount\n    episodes(first: $first) {\n      nodes {\n        ...EpisodeInfo\n      }\n    }\n  }\n  ","\n"]);return Sn=function(){return e},e}function mn(){var e=In(["\n  query getAnimesKitsu($first: Int, $title: String!) {\n    searchAnimeByTitle(title: $title, first: 5) {\n      animes: nodes {\n        id\n        season\n        startDate\n        ...EpisodesList\n      }\n    }\n  }\n  ","\n"]);return mn=function(){return e},e}function fn(){var e=In(["\n  query getEpisodeKitsu($id: ID!, $first: Int) {\n    findAnimeById(id: $id) {\n      ...EpisodesList\n    }\n  }\n  ","\n"]);return fn=function(){return e},e}!function(e){e.G="G",e.Pg="PG",e.R="R",e.R18="R18"}(Ie||(Ie={})),function(e){e.Movie="MOVIE",e.Music="MUSIC",e.Ona="ONA",e.Ova="OVA",e.Special="SPECIAL",e.Tv="TV"}(Te||(Te={})),function(e){e.Background="BACKGROUND",e.Cameo="CAMEO",e.Main="MAIN",e.Recurring="RECURRING"}(Se||(Se={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(me||(me={})),function(e){e.CreatedAt="CREATED_AT",e.Following="FOLLOWING"}(fe||(fe={})),function(e){e.CreatedAt="CREATED_AT",e.Following="FOLLOWING",e.LikesCount="LIKES_COUNT"}(Re||(Re={})),function(e){e.CreatedAt="CREATED_AT",e.Number="NUMBER",e.UpdatedAt="UPDATED_AT"}(pe||(pe={})),function(e){e.CreatedAt="CREATED_AT",e.FollowingFollowed="FOLLOWING_FOLLOWED",e.FollowingFollower="FOLLOWING_FOLLOWER"}(Ce||(Ce={})),function(e){e.AlternativeOrder="ALTERNATIVE_ORDER",e.ReleaseOrder="RELEASE_ORDER"}(Ne||(Ne={})),function(e){e.AlternateSetting="ALTERNATE_SETTING",e.AlternateVersion="ALTERNATE_VERSION",e.Crossover="CROSSOVER",e.MainStory="MAIN_STORY",e.SideStory="SIDE_STORY",e.Spinoff="SPINOFF"}(_e||(_e={})),function(e){e.Completed="COMPLETED",e.Current="CURRENT",e.Dropped="DROPPED",e.OnHold="ON_HOLD",e.Planned="PLANNED"}(ge||(ge={})),function(e){e.Annotated="ANNOTATED",e.Progressed="PROGRESSED",e.Rated="RATED",e.Reacted="REACTED",e.Updated="UPDATED"}(Pe||(Pe={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(Oe||(Oe={})),function(e){e.Closed="CLOSED",e.Spam="SPAM",e.TooHeated="TOO_HEATED"}(Me||(Me={})),function(e){e.Doujin="DOUJIN",e.Manga="MANGA",e.Manhua="MANHUA",e.Manhwa="MANHWA",e.Novel="NOVEL",e.Oel="OEL",e.Oneshot="ONESHOT"}(Le||(Le={})),function(e){e.Anidb="ANIDB",e.AnilistAnime="ANILIST_ANIME",e.AnilistManga="ANILIST_MANGA",e.Animenewsnetwork="ANIMENEWSNETWORK",e.Aozora="AOZORA",e.Hulu="HULU",e.ImdbEpisodes="IMDB_EPISODES",e.Mangaupdates="MANGAUPDATES",e.MyanimelistAnime="MYANIMELIST_ANIME",e.MyanimelistCharacters="MYANIMELIST_CHARACTERS",e.MyanimelistManga="MYANIMELIST_MANGA",e.MyanimelistPeople="MYANIMELIST_PEOPLE",e.MyanimelistProducers="MYANIMELIST_PRODUCERS",e.Mydramalist="MYDRAMALIST",e.Thetvdb="THETVDB",e.ThetvdbSeason="THETVDB_SEASON",e.ThetvdbSeries="THETVDB_SERIES",e.Trakt="TRAKT"}(he||(he={})),function(e){e.Anime="ANIME",e.Category="CATEGORY",e.Character="CHARACTER",e.Episode="EPISODE",e.Manga="MANGA",e.Person="PERSON",e.Producer="PRODUCER"}(xe||(xe={})),function(e){e.Ancestry="ANCESTRY",e.CreatedAt="CREATED_AT"}(ve||(ve={})),function(e){e.CreatedAt="CREATED_AT",e.Role="ROLE",e.UpdatedAt="UPDATED_AT"}(ye||(ye={})),function(e){e.Licensor="LICENSOR",e.Producer="PRODUCER",e.Serialization="SERIALIZATION",e.Studio="STUDIO"}(Ue||(Ue={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.UpVotesCount="UP_VOTES_COUNT"}(we||(we={})),function(e){e.CreatedAt="CREATED_AT",e.Following="FOLLOWING"}(Ge||(Ge={})),function(e){e.Anime="ANIME",e.Manga="MANGA"}(be||(be={})),function(e){e.CreatedAt="CREATED_AT",e.Following="FOLLOWING"}(je||(je={})),function(e){e.CreatedAt="CREATED_AT"}(He||(He={})),function(e){e.AoPro="AO_PRO",e.AoProPlus="AO_PRO_PLUS",e.Patron="PATRON",e.Pro="PRO"}(Ve||(Ve={})),function(e){e.Advanced="ADVANCED",e.Regular="REGULAR",e.Simple="SIMPLE"}(Fe||(Fe={})),function(e){e.Apple="APPLE",e.GooglePlay="GOOGLE_PLAY",e.Paypal="PAYPAL",e.Stripe="STRIPE"}(Ye||(Ye={})),function(e){e.Fall="FALL",e.Spring="SPRING",e.Summer="SUMMER",e.Winter="WINTER"}($e||($e={})),function(e){e.Current="CURRENT",e.Finished="FINISHED",e.Tba="TBA",e.Unreleased="UNRELEASED",e.Upcoming="UPCOMING"}(Be||(Be={})),function(e){e.Bullying="BULLYING",e.Nsfw="NSFW",e.Offensive="OFFENSIVE",e.Other="OTHER",e.Spam="SPAM",e.Spoiler="SPOILER"}(Ze||(Ze={})),function(e){e.Declined="DECLINED",e.Reported="REPORTED",e.Resolved="RESOLVED"}(qe||(qe={})),function(e){e.Admin="ADMIN",e.CommunityMod="COMMUNITY_MOD",e.DatabaseMod="DATABASE_MOD"}(ke||(ke={})),function(e){e.Ascending="ASCENDING",e.Descending="DESCENDING"}(We||(We={})),function(e){e.Canonical="CANONICAL",e.Localized="LOCALIZED",e.Romanized="ROMANIZED"}(Ke||(Ke={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(Je||(Je={})),function(e){e.Approved="APPROVED",e.Draft="DRAFT",e.Pending="PENDING",e.Rejected="REJECTED"}(ze||(ze={}));var Rn=(0,Q.ZP)(Tn()),pn=(0,Q.ZP)(Sn(),Rn),Cn=(0,Q.ZP)(mn(),pn),Nn=(0,Q.ZP)(fn(),pn),_n=function(e,n,t){return e()};var gn=t(8442);function Pn(e,n,t,i,r,a,o){try{var s=e[a](o),E=s.value}catch(c){return void t(c)}s.done?n(E):Promise.resolve(E).then(i,r)}function On(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){Pn(a,i,r,o,s,"next",e)}function s(e){Pn(a,i,r,o,s,"throw",e)}o(void 0)}))}}var Mn=new z.GraphQLClient(gn.TS,{headers:{}}),Ln=new z.GraphQLClient(gn.gm,{headers:{}}),hn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dn;return{getAnimeBanner:function(t,i){return n((function(n){return e.request(en,t,ee({},i,n))}),"getAnimeBanner","query")},getAnimeInfo:function(t,i){return n((function(n){return e.request(nn,t,ee({},i,n))}),"getAnimeInfo","query")},getAnimeByIds:function(t,i){return n((function(n){return e.request(tn,t,ee({},i,n))}),"getAnimeByIds","query")},getAnimeTitle:function(t,i){return n((function(n){return e.request(rn,t,ee({},i,n))}),"getAnimeTitle","query")},getPopularBanner:function(t,i){return n((function(n){return e.request(an,t,ee({},i,n))}),"getPopularBanner","query")},searchAnime:function(t,i){return n((function(n){return e.request(on,t,ee({},i,n))}),"searchAnime","query")},searchGenre:function(t,i){return n((function(n){return e.request(sn,t,ee({},i,n))}),"searchGenre","query")},getList:function(t,i){return n((function(n){return e.request(En,t,ee({},i,n))}),"getList","query")},indexPage:function(t,i){return n((function(n){return e.request(cn,t,ee({},i,n))}),"indexPage","query")},animePage:function(t,i){return n((function(n){return e.request(un,t,ee({},i,n))}),"animePage","query")},watchPage:function(t,i){return n((function(n){return e.request(An,t,ee({},i,n))}),"watchPage","query")}}}(Mn),xn=(hn.indexPage,hn.animePage,hn.getList,hn.searchAnime,hn.getAnimeInfo,hn.getPopularBanner,hn.getAnimeBanner,hn.getAnimeTitle,hn.searchGenre,hn.watchPage,hn.getAnimeByIds),vn=function(){var e=On(J().mark((function e(n){var t;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,n();case 4:t=e.sent,e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(1),i=e.t0,null!=(r=z.ClientError)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](i):i instanceof r){e.next=11;break}throw e.t0;case 11:t=e.t0.response.data;case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}var i,r}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),yn=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_n;return{getAnimesKitsu:function(t,i){return n((function(n){return e.request(Cn,t,ln({},i,n))}),"getAnimesKitsu","query")},getEpisodeKitsu:function(t,i){return n((function(n){return e.request(Nn,t,ln({},i,n))}),"getEpisodeKitsu","query")}}}(Ln,vn),Un=yn.getAnimesKitsu,wn=(yn.getEpisodeKitsu,function(){var e=On(J().mark((function e(n,t,i){var r,a;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",{episodeCount:0,episodes:{nodes:[]}});case 2:return e.next=4,Un({title:n,first:8});case 4:return r=e.sent,void 0===(a=r.searchAnimeByTitle.animes.filter((function(e){return!!e&&(!!e.startDate&&((e.season===t||!t)&&e.startDate.trim().split("-")[0]===i.toString()))}))[0])&&(a={id:"-1",episodeCount:0,episodes:{nodes:[]}}),null===a.episodeCount&&(a.episodeCount=a.episodes.nodes.length),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))}(),!0),Gn=function(e){var n=e.banner,t=e.trending,i=e.popular,r=e.topRated;W.Z.finish();var a=(0,B.useState)([]),o=a[0],s=a[1];return(0,B.useEffect)((function(){var e=Object.keys(localStorage).filter((function(e){return e.startsWith("Anime")})).map((function(e){return parseInt(e.replace("Anime",""),10)}));xn({perPage:12,page:1,ids:e}).then((function(e){return s(e.Page.media)}))}),[]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(k.Z,{}),(0,$.jsx)(Z.Z,{anime:n}),(0,$.jsx)(q.Z,{title:"Trending",animeList:t.media}),o.length>0?(0,$.jsx)(q.Z,{title:"Continue watching",animeList:o}):null,(0,$.jsx)(q.Z,{title:"Popular",animeList:i.media}),(0,$.jsx)(q.Z,{title:"Top Rated",animeList:r.media})]})}},2426:function(e,n,t){"use strict";t.d(n,{YE:function(){return r}});var i=t(8764).Buffer,r=function(e){return n=function(e){return'\n  <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <rect width="1" height="1" style="fill:'.concat(e,";stroke-width:3;stroke:").concat(e,'" />\n  </svg>\n')}(e),i.from(n).toString("base64");var n}},3305:function(e,n,t){"use strict";t.d(n,{Vt:function(){return r},qy:function(){return i}});var i=function(e,n){return"/api/video/proxy?src=".concat(encodeURIComponent(e),"&referer=").concat(encodeURIComponent(n))},r=function(e){return e.replace(/<\/?\w*\\?>/gm,"")}}},function(e){e.O(0,[232,449,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);