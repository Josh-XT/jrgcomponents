import {
  AccountBoxOutlined,
  Apple,
  AttachMoneyOutlined,
  BrushOutlined,
  BuildOutlined,
  CameraAltOutlined,
  ChatOutlined,
  CheckBoxOutlined,
  CloudOutlined,
  CloudUploadOutlined,
  CodeOutlined,
  CreditCardOutlined,
  CreditScoreOutlined,
  DeviceUnknownOutlined,
  DirectionsRunOutlined,
  EmailOutlined,
  FacebookOutlined,
  FingerprintOutlined,
  FitnessCenterOutlined,
  FolderOutlined,
  ForumOutlined,
  GamepadOutlined,
  GitHub,
  Google,
  HeadsetMicOutlined,
  ImageOutlined,
  LinkedIn,
  LinkOutlined,
  LockOpenOutlined,
  LockOutlined,
  MapOutlined,
  MessageOutlined,
  Microsoft,
  MusicNoteOutlined,
  PaletteOutlined,
  PaymentOutlined,
  PhoneAndroidOutlined,
  PinDropOutlined,
  QuestionAnswerOutlined,
  Reddit,
  RestaurantOutlined,
  ShareOutlined,
  ShoppingCartOutlined,
  SupervisorAccountOutlined,
  Twitter,
  VideoCallOutlined,
  VideoLibraryOutlined,
  WorkOutlineOutlined,
  X,
} from '@mui/icons-material';
import React from 'react';
const providers = {
  AOL: {
    client_id: process.env.NEXT_PUBLIC_AOL_CLIENT_ID,
    scope: 'profile email',
    uri: 'https://api.screenname.aol.com/auth/authorize',
    params: {},
    icon: <EmailOutlined />,
  },
  Amazon: {
    client_id: process.env.NEXT_PUBLIC_AMAZON_CLIENT_ID,
    scope: 'profile',
    uri: 'https://www.amazon.com/ap/oa',
    params: {},
    icon: <ShoppingCartOutlined />,
  },
  Apple: {
    client_id: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID,
    scope: 'name email',
    uri: 'https://appleid.apple.com/auth/authorize',
    params: {},
    icon: <Apple />,
  },
  Autodesk: {
    client_id: process.env.NEXT_PUBLIC_AUTODESK_CLIENT_ID,
    scope: 'data:read data:write data:create bucket:create account:read',
    uri: 'https://developer.api.autodesk.com/authentication/1/authorize',
    params: {},
    icon: <BuildOutlined />,
  },
  'Battle.net': {
    client_id: process.env.NEXT_PUBLIC_BATTLENET_CLIENT_ID,
    scope: 'openid',
    uri: 'https://battlenet.com.cn/oauth/',
    params: {},
    icon: <GamepadOutlined />,
  },
  Basecamp: {
    client_id: process.env.NEXT_PUBLIC_BASECAMP_CLIENT_ID,
    scope: 'access',
    uri: 'https://launchpad.37signals.com/authorization/new',
    params: {},
    icon: <WorkOutlineOutlined />,
  },
  Bitbucket: {
    client_id: process.env.NEXT_PUBLIC_BITBUCKET_CLIENT_ID,
    scope: 'email',
    uri: 'https://bitbucket.org/site/oauth2/authorize',
    params: {},
    icon: <CodeOutlined />,
  },
  bitly: {
    client_id: process.env.NEXT_PUBLIC_BITLY_CLIENT_ID,
    scope: 'default',
    uri: 'https://bitly.com/oauth/authorize',
    params: {},
    icon: <LinkOutlined />,
  },
  Box: {
    client_id: process.env.NEXT_PUBLIC_BOX_CLIENT_ID,
    scope: 'root_readwrite',
    uri: 'https://account.box.com/api/oauth2/authorize',
    params: {},
    icon: <FolderOutlined />,
  },
  ClearScore: {
    client_id: process.env.NEXT_PUBLIC_CLEARSCORE_CLIENT_ID,
    scope: 'accounts:read kyc:read',
    uri: 'https://api.clearscore.com/oauth/authorize',
    params: {},
    icon: <CreditScoreOutlined />,
  },
  'Cloud Foundry': {
    client_id: process.env.NEXT_PUBLIC_CLOUDFOUNDRY_CLIENT_ID,
    scope: 'cloud_controller_service_permissions.read',
    uri: 'https://login.run.pivotal.io/oauth/authorize',
    params: {},
    icon: <CloudOutlined />,
  },
  Dailymotion: {
    client_id: process.env.NEXT_PUBLIC_DAILYMOTION_CLIENT_ID,
    scope: 'email',
    uri: 'https://www.dailymotion.com/oauth/authorize',
    params: {},
    icon: <VideoLibraryOutlined />,
  },
  'Deutsche Telekom': {
    client_id: process.env.NEXT_PUBLIC_DEUTSCHETELEKOM_CLIENT_ID,
    scope: 'openid',
    uri: 'https://accounts.login.idm.telekom.com/oauth2/authorize',
    params: {},
    icon: <PhoneAndroidOutlined />,
  },
  deviantART: {
    client_id: process.env.NEXT_PUBLIC_DEVIANTART_CLIENT_ID,
    scope: 'browse basicdata email',
    uri: 'https://www.deviantart.com/oauth2/draft15/authorize',
    params: {},
    icon: <BrushOutlined />,
  },
  Discord: {
    client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    scope: 'identify email',
    uri: 'https://discord.com/api/oauth2/authorize',
    params: {},
    icon: <HeadsetMicOutlined />,
  },
  Dropbox: {
    client_id: process.env.NEXT_PUBLIC_DROPBOX_CLIENT_ID,
    scope: 'account_info.read files.metadata.read files.content.read',
    uri: 'https://www.dropbox.com/oauth2/authorize',
    params: {},
    icon: <CloudUploadOutlined />,
  },
  Facebook: {
    client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    scope: 'email',
    uri: 'https://www.facebook.com/v16.0/dialog/oauth',
    params: {},
    icon: <FacebookOutlined />,
  },
  FatSecret: {
    client_id: process.env.NEXT_PUBLIC_FATSECRET_CLIENT_ID,
    scope: 'basic',
    uri: 'https://www.fatsecret.com/oauth2/authorize',
    params: {},
    icon: <RestaurantOutlined />,
  },
  Fitbit: {
    client_id: process.env.NEXT_PUBLIC_FITBIT_CLIENT_ID,
    scope: 'activity heartrate location nutrition profile settings sleep view_activity',
    uri: 'https://www.fitbit.com/oauth2/authorize',
    params: {},
    icon: <FitnessCenterOutlined />,
  },
  Formstack: {
    client_id: process.env.NEXT_PUBLIC_FORMSTACK_CLIENT_ID,
    scope: 'openid',
    uri: 'https://auth.formstack.com/authorize',
    params: {},
    icon: <CheckBoxOutlined />,
  },
  Foursquare: {
    client_id: process.env.NEXT_PUBLIC_FOURSQUARE_CLIENT_ID,
    scope: 'email',
    uri: 'https://foursquare.com/oauth2/authenticate',
    params: {},
    icon: <PinDropOutlined />,
  },
  GitHub: {
    client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    scope: 'user:email',
    uri: 'https://github.com/login/oauth/authorize',
    params: {},
    icon: <GitHub />,
  },
  GitLab: {
    client_id: process.env.NEXT_PUBLIC_GITLAB_CLIENT_ID,
    scope: 'read_user',
    uri: 'https://gitlab.com/oauth/authorize',
    params: {},
    icon: <CodeOutlined />,
  },
  Google: {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    scope: 'profile email https://www.googleapis.com/auth/gmail.send',
    uri: 'https://accounts.google.com/o/oauth2/v2/auth',
    params: {
      access_type: 'offline',
    },
    icon: <Google />,
  },
  Huddle: {
    client_id: process.env.NEXT_PUBLIC_HUDDLE_CLIENT_ID,
    scope: 'user:email user:profile:full user:content:full',
    uri: 'https://huddle.eu/login',
    params: {},
    icon: <SupervisorAccountOutlined />,
  },
  Imgur: {
    client_id: process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID,
    scope: 'email',
    uri: 'https://api.imgur.com/oauth2/authorize',
    params: {},
    icon: <ImageOutlined />,
  },
  Instagram: {
    client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
    scope: 'user_profile,user_media',
    uri: 'https://api.instagram.com/oauth/authorize',
    params: {},
    icon: <CameraAltOutlined />,
  },
  'Intel Cloud Services': {
    client_id: process.env.NEXT_PUBLIC_INTELCLOUDSERVICES_CLIENT_ID,
    scope: 'openid user/info.me cloudaccess',
    uri: 'https://cloudlogin.01.intrinsicsecure.com/authorize',
    params: {},
    icon: <CloudOutlined />,
  },
  Jive: {
    client_id: process.env.NEXT_PUBLIC_JIVE_CLIENT_ID,
    scope: 'read',
    uri: 'https://acmeprod.jiveon.com/api/core/v3/authorize',
    params: {},
    icon: <ForumOutlined />,
  },
  Keycloak: {
    client_id: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    scope: 'openid',
    uri: 'https://keycloak.example.com/auth/realms/myrealm/protocol/openid-connect/auth',
    params: {},
    icon: <LockOutlined />,
  },
  LinkedIn: {
    client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
    scope: 'r_emailaddress r_liteprofile',
    uri: 'https://www.linkedin.com/oauth/v2/authorization',
    params: {},
    icon: <LinkedIn />,
  },
  Microsoft: {
    client_id: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID,
    scope:
      'https://graph.microsoft.com/User.Read https://graph.microsoft.com/Mail.Send https://graph.microsoft.com/Calendars.ReadWrite.Shared',
    uri: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    params: {},
    icon: <Microsoft />,
  },
  NetIQ: {
    client_id: process.env.NEXT_PUBLIC_NETIQ_CLIENT_ID,
    scope: 'openid profile email',
    uri: 'https://idp.netiq.com/nidp/app/login',
    params: {},
    icon: <LockOutlined />,
  },
  Okta: {
    client_id: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    scope: 'openid profile email',
    uri: 'https://acme.oktapreview.com/oauth2/v1/authorize',
    params: {},
    icon: <FingerprintOutlined />,
  },
  OpenAM: {
    client_id: process.env.NEXT_PUBLIC_OPENAM_CLIENT_ID,
    scope: 'fr:idm:*',
    uri: 'https://openam.example.com/oauth2/authorize.jsp',
    params: {},
    icon: <LockOpenOutlined />,
  },
  OpenStreetMap: {
    client_id: process.env.NEXT_PUBLIC_OPENSTREETMAP_CLIENT_ID,
    scope: 'read_prefs',
    uri: 'https://www.openstreetmap.org/oauth2/authorize',
    params: {},
    icon: <MapOutlined />,
  },
  ORCID: {
    client_id: process.env.NEXT_PUBLIC_ORCID_CLIENT_ID,
    scope: '/read-public',
    uri: 'https://orcid.org/oauth/authorize',
    params: {},
    icon: <AccountBoxOutlined />,
  },
  PayPal: {
    client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    scope: 'openid email https://uri.paypal.com/services/paypalattributes',
    uri: 'https://www.paypal.com/signin/authorize',
    params: {},
    icon: <PaymentOutlined />,
  },
  'Ping Identity': {
    client_id: process.env.NEXT_PUBLIC_PINGIDENTITY_CLIENT_ID,
    scope: 'openid profile email',
    uri: 'https://sso.pingone.com/XXXXXXXXXXXXX/as/authorization.oauth2',
    params: {},
    icon: <FingerprintOutlined />,
  },
  Pixiv: {
    client_id: process.env.NEXT_PUBLIC_PIXIV_CLIENT_ID,
    scope: 'user:read',
    uri: 'https://accounts.pixiv.net/oauth2/authorize',
    params: {},
    icon: <PaletteOutlined />,
  },
  Reddit: {
    client_id: process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID,
    scope: 'identity',
    uri: 'https://www.reddit.com/api/v1/authorize',
    params: {},
    icon: <Reddit />,
  },
  Salesforce: {
    client_id: process.env.NEXT_PUBLIC_SALESFORCE_CLIENT_ID,
    scope: 'api refresh_token',
    uri: 'https://login.salesforce.com/services/oauth2/authorize',
    params: {},
    icon: <WorkOutlineOutlined />,
  },
  'Sina Weibo': {
    client_id: process.env.NEXT_PUBLIC_SINAWEIBO_CLIENT_ID,
    scope: 'email',
    uri: 'https://api.weibo.com/oauth2/authorize',
    params: {},
    icon: <ShareOutlined />,
  },
  Slack: {
    client_id: process.env.NEXT_PUBLIC_SLACK_CLIENT_ID,
    scope: 'users:read users:read.email',
    uri: 'https://slack.com/oauth/v2/authorize',
    params: {},
    icon: <MessageOutlined />,
  },
  Spotify: {
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    scope:
      'user-read-email user-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-recently-played',
    uri: 'https://accounts.spotify.com/authorize',
    params: {},
    icon: <MusicNoteOutlined />,
  },
  'Stack Exchange': {
    client_id: process.env.NEXT_PUBLIC_STACKEXCHANGE_CLIENT_ID,
    scope: 'no_expiry',
    uri: 'https://stackexchange.com/oauth',
    params: {},
    icon: <QuestionAnswerOutlined />,
  },
  Steam: {
    client_id: process.env.NEXT_PUBLIC_STEAM_CLIENT_ID,
    scope: 'openid',
    uri: 'https://steamcommunity.com/openid/login',
    params: {},
    icon: <GamepadOutlined />,
  },
  Strava: {
    client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
    scope: 'activity:read_all',
    uri: 'https://www.strava.com/oauth/authorize',
    params: {},
    icon: <DirectionsRunOutlined />,
  },
  Stripe: {
    client_id: process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID,
    scope: 'read_write',
    uri: 'https://connect.stripe.com/oauth/authorize',
    params: {},
    icon: <CreditCardOutlined />,
  },
  Twitch: {
    client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
    scope: 'user:read:email',
    uri: 'https://id.twitch.tv/oauth2/authorize',
    params: {},
    icon: <VideoCallOutlined />,
  },
  Viadeo: {
    client_id: process.env.NEXT_PUBLIC_VIADEO_CLIENT_ID,
    scope: 'access',
    uri: 'https://www.viadeo.com/oauth-provider/authorize2',
    params: {},
    icon: <WorkOutlineOutlined />,
  },
  Vimeo: {
    client_id: process.env.NEXT_PUBLIC_VIMEO_CLIENT_ID,
    scope: 'public',
    uri: 'https://api.vimeo.com/oauth/authorize',
    params: {},
    icon: <VideoCallOutlined />,
  },
  VK: {
    client_id: process.env.NEXT_PUBLIC_VK_CLIENT_ID,
    scope: 'email',
    uri: 'https://oauth.vk.com/authorize',
    params: {},
    icon: <DeviceUnknownOutlined />,
  },
  WeChat: {
    client_id: process.env.NEXT_PUBLIC_WECHAT_CLIENT_ID,
    scope: 'snsapi_login',
    uri: 'https://open.weixin.qq.com/connect/qrconnect',
    params: {},
    icon: <ChatOutlined />,
  },
  Withings: {
    client_id: process.env.NEXT_PUBLIC_WITHINGS_CLIENT_ID,
    scope: 'user.info',
    uri: 'https://account.withings.com/oauth2_user/authorize2',
    params: {},
    icon: <FitnessCenterOutlined />,
  },
  'WSO2 identity': {
    client_id: process.env.NEXT_PUBLIC_WSO2_CLIENT_ID,
    scope: 'openid email profile',
    uri: 'https://serverurl:9443/oauth2/authorize',
    params: {},
    icon: <FingerprintOutlined />,
  },
  X: {
    client_id: process.env.NEXT_PUBLIC_X_CLIENT_ID,
    scope: 'users.read tweet.read tweet.write offline.access',
    uri: 'https://twitter.com/i/oauth2/authorize',
    params: {},
    icon: <Twitter />,
  },
  Xero: {
    client_id: process.env.NEXT_PUBLIC_XERO_CLIENT_ID,
    scope: 'openid email profile offline_access',
    uri: 'https://login.xero.com/identity/connect/authorize',
    params: {},
    icon: <AttachMoneyOutlined />,
  },
  XING: {
    client_id: process.env.NEXT_PUBLIC_XING_CLIENT_ID,
    scope: 'openid',
    uri: 'https://login.xing.com/authorize',
    params: {},
    icon: <WorkOutlineOutlined />,
  },
  Yahoo: {
    client_id: process.env.NEXT_PUBLIC_YAHOO_CLIENT_ID,
    scope: 'openid sdx-r email',
    uri: 'https://api.login.yahoo.com/oauth2/request_auth',
    params: {},
    icon: <EmailOutlined />,
  },
  Yammer: {
    client_id: process.env.NEXT_PUBLIC_YAMMER_CLIENT_ID,
    scope: 'user_details',
    uri: 'https://www.yammer.com/oauth2/authorize',
    params: {},
    icon: <ForumOutlined />,
  },
  Yandex: {
    client_id: process.env.NEXT_PUBLIC_YANDEX_CLIENT_ID,
    scope: 'login:email',
    uri: 'https://oauth.yandex.com/authorize',
    params: {},
    icon: <DeviceUnknownOutlined />,
  },
  Yelp: {
    client_id: process.env.NEXT_PUBLIC_YELP_CLIENT_ID,
    scope: 'email',
    uri: 'https://www.yelp.com/oauth2/authorize',
    params: {},
    icon: <RestaurantOutlined />,
  },
  Zendesk: {
    client_id: process.env.NEXT_PUBLIC_ZENDESK_CLIENT_ID,
    scope: 'read',
    uri: 'https://YOURSUBDOMAIN.zendesk.com/oauth/authorize',
    params: {},
    icon: <HeadsetMicOutlined />,
  },
};

export default providers;
