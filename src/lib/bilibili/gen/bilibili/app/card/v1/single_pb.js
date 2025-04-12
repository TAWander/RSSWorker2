// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/card/v1/single.proto (package bilibili.app.card.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Args, Avatar, Base, LikeButton, ReasonStyle, Up } from "./common_pb.js";

/**
 * @generated from message bilibili.app.card.v1.SmallCoverV5
 */
export const SmallCoverV5 = proto3.makeMessageType(
  "bilibili.app.card.v1.SmallCoverV5",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "cover_gif", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "up", kind: "message", T: Up },
    { no: 4, name: "cover_right_text_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "right_desc_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "right_desc_2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "rcmd_reason_style", kind: "message", T: ReasonStyle },
    { no: 8, name: "hotword_entrance", kind: "message", T: HotwordEntrance },
    { no: 9, name: "corner_mark_style", kind: "message", T: ReasonStyle },
    { no: 10, name: "right_icon_1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "right_icon_2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "left_corner_mark_style", kind: "message", T: ReasonStyle },
    { no: 13, name: "cover_right_text_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "right_desc1_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.SmallCoverV5Ad
 */
export const SmallCoverV5Ad = proto3.makeMessageType(
  "bilibili.app.card.v1.SmallCoverV5Ad",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "cover_gif", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "up", kind: "message", T: Up },
    { no: 4, name: "cover_right_text1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "right_desc1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "right_desc2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "rcmd_reason_style", kind: "message", T: ReasonStyle },
    { no: 8, name: "hotword_entrance", kind: "message", T: HotwordEntrance },
    { no: 9, name: "corner_mark_style", kind: "message", T: ReasonStyle },
    { no: 10, name: "right_icon1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "right_icon2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "left_corner_mark_style", kind: "message", T: ReasonStyle },
    { no: 13, name: "cover_right_text_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "right_desc1_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.HotwordEntrance
 */
export const HotwordEntrance = proto3.makeMessageType(
  "bilibili.app.card.v1.HotwordEntrance",
  () => [
    { no: 1, name: "hotword_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hot_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "h5_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.LargeCoverV1
 */
export const LargeCoverV1 = proto3.makeMessageType(
  "bilibili.app.card.v1.LargeCoverV1",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "cover_gif", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar", kind: "message", T: Avatar },
    { no: 4, name: "cover_left_text_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "cover_left_text_2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "cover_left_text_3", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "cover_badge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "top_rcmd_reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "bottom_rcmd_reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "official_icon", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "can_play", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "top_rcmd_reason_style", kind: "message", T: ReasonStyle },
    { no: 14, name: "bottom_rcmd_reason_style", kind: "message", T: ReasonStyle },
    { no: 15, name: "rcmd_reason_style_v2", kind: "message", T: ReasonStyle },
    { no: 16, name: "left_cover_badge_style", kind: "message", T: ReasonStyle },
    { no: 17, name: "right_cover_badge_style", kind: "message", T: ReasonStyle },
    { no: 18, name: "cover_badge_2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "like_button", kind: "message", T: LikeButton },
    { no: 20, name: "title_single_line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 21, name: "cover_right_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.ThreeItemAllV2
 */
export const ThreeItemAllV2 = proto3.makeMessageType(
  "bilibili.app.card.v1.ThreeItemAllV2",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "top_rcmd_reason_style", kind: "message", T: ReasonStyle },
    { no: 3, name: "item", kind: "message", T: TwoItemHV1Item, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.TwoItemHV1Item
 */
export const TwoItemHV1Item = proto3.makeMessageType(
  "bilibili.app.card.v1.TwoItemHV1Item",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "args", kind: "message", T: Args },
    { no: 6, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "cover_left_text_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "cover_left_icon_1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "cover_right_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 推荐
 *
 * @generated from message bilibili.app.card.v1.RcmdOneItem
 */
export const RcmdOneItem = proto3.makeMessageType(
  "bilibili.app.card.v1.RcmdOneItem",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "topRcmdReasonStyle", kind: "message", T: ReasonStyle },
    { no: 3, name: "item", kind: "message", T: SmallCoverRcmdItem },
  ],
);

/**
 * 小封面推荐内容信息
 *
 * @generated from message bilibili.app.card.v1.SmallCoverRcmdItem
 */
export const SmallCoverRcmdItem = proto3.makeMessageType(
  "bilibili.app.card.v1.SmallCoverRcmdItem",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "coverRightText1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "rightDesc1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "rightDesc2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "coverGif", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "rightIcon1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "rightIcon2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "cover_right_text_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "right_desc1_content_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.ThreeItemV1
 */
export const ThreeItemV1 = proto3.makeMessageType(
  "bilibili.app.card.v1.ThreeItemV1",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "titleIcon", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "moreUri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "moreText", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "items", kind: "message", T: ThreeItemV1Item, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.ThreeItemV1Item
 */
export const ThreeItemV1Item = proto3.makeMessageType(
  "bilibili.app.card.v1.ThreeItemV1Item",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "coverLeftText", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "coverLeftIcon", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "desc1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "desc2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "badge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.HotTopicItem
 */
export const HotTopicItem = proto3.makeMessageType(
  "bilibili.app.card.v1.HotTopicItem",
  () => [
    { no: 1, name: "cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.HotTopic
 */
export const HotTopic = proto3.makeMessageType(
  "bilibili.app.card.v1.HotTopic",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "items", kind: "message", T: HotTopicItem, repeated: true },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.DynamicHot
 */
export const DynamicHot = proto3.makeMessageType(
  "bilibili.app.card.v1.DynamicHot",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "top_left_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "desc1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "desc2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "more_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "more_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "covers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "cover_right_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "top_rcmd_reason_style", kind: "message", T: ReasonStyle },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.MiddleCoverV3
 */
export const MiddleCoverV3 = proto3.makeMessageType(
  "bilibili.app.card.v1.MiddleCoverV3",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "desc1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "desc2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cover_badge_style", kind: "message", T: ReasonStyle },
  ],
);

/**
 * @generated from message bilibili.app.card.v1.LargeCoverV4
 */
export const LargeCoverV4 = proto3.makeMessageType(
  "bilibili.app.card.v1.LargeCoverV4",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "cover_left_text_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cover_left_text_2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "cover_left_text_3", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "cover_badge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "can_play", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "up", kind: "message", T: Up },
    { no: 8, name: "short_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "share_subtitle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "play_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "bvid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "sub_param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 热门列表顶部按钮
 *
 * @generated from message bilibili.app.card.v1.PopularTopEntrance
 */
export const PopularTopEntrance = proto3.makeMessageType(
  "bilibili.app.card.v1.PopularTopEntrance",
  () => [
    { no: 1, name: "base", kind: "message", T: Base },
    { no: 2, name: "items", kind: "message", T: EntranceItem, repeated: true },
  ],
);

/**
 * 热门列表按钮信息
 *
 * @generated from message bilibili.app.card.v1.EntranceItem
 */
export const EntranceItem = proto3.makeMessageType(
  "bilibili.app.card.v1.EntranceItem",
  () => [
    { no: 1, name: "goto", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "module_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "entrance_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "bubble", kind: "message", T: Bubble },
    { no: 8, name: "entrance_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 气泡信息
 *
 * @generated from message bilibili.app.card.v1.Bubble
 */
export const Bubble = proto3.makeMessageType(
  "bilibili.app.card.v1.Bubble",
  () => [
    { no: 1, name: "bubble_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "stime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

